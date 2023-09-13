import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Switch } from "antd";
import { toast } from "react-toastify";
import { AiOutlineDelete } from "react-icons/ai";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import moment from "moment/moment";
import NavBar from "./navbar";
import messagesService from "../services/messagesService";
import bookingsService from "../services/bookingsService";
import { paginate } from "../utils/paginate";
import Pagination from "../common/pagination";

const Dashboard = () => {
  const [appointormessage, setappointormessage] = useState("Appoint");
  const [messages, setMessages] = useState([]);
  const [bookings, setBooking] = useState([]);
  const [currentPageMessage, setPageMessage] = useState(0);
  const [currentPageAppoint, setPageAppoint] = useState(0);
  const [sortColumnMessage, setSortMessage] = useState({
    path: "date",
    order: "asc",
  });
  const [sortColumnAppoint, setSortAppoint] = useState({
    path: "date",
    order: "asc",
  });
  const [filterBy, setFilterBy] = useState("Month");
  const [pageSize] = useState(7);
  const [bookingData, setBookingData] = useState({
    _id: "",
    category: "",
    service: "",
    date: "",
    day: "",
    from: "",
    to: "",
    fullName: "",
    email: "",
    number: "",
    notes: "",
    booked: "",
  });

  // Initializing dates format for booking

  for (const book of bookings) {
    book.date = moment(book.date).format("YYYY-MM-DD");
  }

  // Filtering
  function handleFilterParameter(e) {
    const value = e.currentTarget.value;
    setFilterBy(value);
    setPageAppoint(0);
    setPageMessage(0);
  }

  const currentMonth = moment().month() + 1;
  const currentYear = moment().year();
  const currentDay = moment().date();

  let currentdate = new Date();
  let Month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let mindex = currentdate.getMonth();
  let month = Month[mindex];
  let day = currentdate.getDate();
  let year = currentdate.getFullYear();

  // Messages Filtering,Sorting,Pagination
  const MessagesMonth = messages.filter((message) => {
    let [year, month] = message.date.split("-");
    return currentMonth === +month && currentYear == year;
  });

  const MessagesYear = messages.filter((message) => {
    let [year] = message.date.split("-");
    return currentYear == year;
  });

  const MessagesWeekly = messages.filter(
    (message) =>
      moment(message.date).format("YYYY/W") === moment().format("YYYY/W")
  );

  const allMessages = {
    Week: MessagesWeekly,
    Month: MessagesMonth,
    Year: MessagesYear,
  };

  const sortedMessages = _.orderBy(
    allMessages[filterBy],
    [sortColumnAppoint.path],
    [sortColumnAppoint.order]
  );

  const pagmessages = paginate(sortedMessages, currentPageMessage, pageSize);

  function handleSortMessages(path) {
    if (sortColumnMessage.path === path) {
      if (sortColumnMessage.order === "asc") {
        setSortMessage({ path: path, order: "desc" });
      } else {
        setSortMessage({ path: path, order: "asc" });
      }
    } else {
      setSortMessage({ path: path, order: "asc" });
    }
  }

  function renderSortIconMessage(path) {
    if (path !== sortColumnMessage.path) return null;

    if (sortColumnMessage.order === "asc") return <FaSortUp />;
    return <FaSortDown />;
  }

  // Booking Filtering, Sorting,Pagination
  const bookingsMonth = bookings.filter((book) => {
    let [year, month] = book.date.split("-");
    return currentMonth === +month && currentYear == year;
  });

  const bookingYear = bookings.filter((book) => {
    let [year] = book.date.split("-");
    return currentYear == year;
  });

  const bookingWeekly = bookings.filter(
    (book) => moment(book.date).format("YYYY/W") === moment().format("YYYY/W")
  );

  const allBookings = {
    Week: bookingWeekly,
    Month: bookingsMonth,
    Year: bookingYear,
  };

  const filteredByDate = allBookings[filterBy];

  const sortedAppoint = _.orderBy(
    filteredByDate,
    [sortColumnAppoint.path],
    [sortColumnAppoint.order]
  );

  const pagAppoint = paginate(sortedAppoint, currentPageAppoint, pageSize);

  function handleSortBooking(path) {
    if (sortColumnAppoint.path === path) {
      if (sortColumnAppoint.order === "asc") {
        setSortAppoint({ path: path, order: "desc" });
      } else {
        setSortAppoint({ path: path, order: "asc" });
      }
    } else {
      setSortAppoint({ path: path, order: "asc" });
    }
  }

  function renderSortIconBooking(path) {
    if (path !== sortColumnAppoint.path) return null;

    if (sortColumnAppoint.order === "asc") return <FaSortUp />;
    return <FaSortDown />;
  }

  function handleSelectMessageorAppoint() {
    if (appointormessage === "Message") {
      setappointormessage("Appoint");
    } else {
      setappointormessage("Message");
    }
  }

  // Messages
  // Get
  async function getMessages() {
    const result = await messagesService.getMessages();
    setMessages(result.data);
  }
  // Delete
  async function deleteMessage(message) {
    const original = messages;
    const messages2 = messages.filter((m) => m._id !== message._id);
    setMessages(messages2);

    try {
      const result = await messagesService.deleteMessage(message);
      console.log(result);
    } catch (ex) {
      toast(ex.response.data);
      setMessages(original);
    }
  }

  function nextPageMessage() {
    if (allMessages[filterBy].length === 0) {
      setPageMessage(0);
    } else if (currentPageMessage === Math.ceil(messages.length / 7 - 1)) {
      setPageMessage(0);
    } else {
      setPageMessage(currentPageMessage + 1);
    }
  }

  function prevPageMessage() {
    if (currentPageMessage === 0) return 0;
    setPageMessage(currentPageMessage - 1);
  }

  // Booking
  // Get
  async function getBooking() {
    const result = await bookingsService.getBooking();
    setBooking(result.data);
  }
  // Edit
  async function editBooking(book) {
    let bookornot = !book.booked;

    setBookingData(book);

    const booking2 = bookings;

    let selectedBooking = bookings.filter((b) => b._id === book._id);
    const index = bookings.indexOf(selectedBooking[0]);
    booking2[index] = {
      _id: book._id,
      category: book.category,
      service: book.service,
      date: book.date,
      day: book.day,
      from: book.from,
      to: book.to,
      fullName: book.fullName,
      email: book.email,
      number: book.number,
      notes: book.notes,
      booked: bookornot,
    };

    setBooking(booking2);

    try {
      booking2[index].date = moment(booking2[index].date).format("YYYY-MM-DD");

      const result = await bookingsService.editBooking(booking2[index]);

      console.log(result);
    } catch (ex) {
      console.log(ex);
      toast.error(ex.response.data);
      setTimeout(() => {
        window.location = "/dashboard";
      }, 2500);
    }
  }

  // Delete
  async function deletBooking(book) {
    const original = bookings;
    const bookings2 = bookings.filter((m) => m._id !== book._id);
    setBooking(bookings2);

    try {
      const result = await bookingsService.deleteBooking(book);
      console.log(result);
    } catch (ex) {
      toast(ex.response.data);
      setBooking(original);
    }
  }

  function nextPageBooking() {
    if (allBookings[filterBy].length === 0) {
      setPageAppoint(0);
    }
    if (currentPageAppoint === Math.ceil(bookings.length / 7 - 1)) {
      setPageAppoint(0);
    } else {
      setPageAppoint(currentPageAppoint + 1);
    }
  }

  function prevPageBooking() {
    if (currentPageAppoint === 0) return 0;
    setPageAppoint(currentPageAppoint - 1);
  }

  useEffect(() => {
    getMessages();
    getBooking();
  }, []);

  return (
    <div>
      <NavBar />
      <div>
        <h2 className="text-2xl md:text-4xl text-center mt-2 font-medium">
          Good Day Doc
        </h2>
        <div className="flex justify-end px-5 mt-2">
          <label className="md:text-lg px-1 font-medium" htmlFor="filterby">
            Filter By:
          </label>
          <select
            className="w-[100px] outline-none border-2 border-black rounded-lg"
            name="filterby"
            id="filterby"
            value={filterBy}
            onChange={handleFilterParameter}
          >
            <option value="Week">Week</option>
            <option value="Month">Month</option>
            <option value="Year">Year </option>
          </select>
        </div>
        <div className="flex justify-evenly mt-2 md:mt-3  font-medium">
          <h3
            className={
              appointormessage === "Message"
                ? "cursor-pointer text-xl md: hover:text-xl  tracking-widest  transition-all duration-500 md:text-2xl md:hover:text-2xl"
                : "cursor-pointer   transition-all duration-500 md:text-xl md:hover:text-2xl"
            }
            onClick={handleSelectMessageorAppoint}
          >
            MESSAGES
          </h3>
          <h3
            className={
              appointormessage === "Appoint"
                ? "cursor-pointer text-xl md: hover:text-xl  tracking-widest  transition-all duration-500 md:text-2xl md:hover:text-2xl"
                : "cursor-pointer   transition-all duration-500 md:text-xl md:hover:text-2xl"
            }
            onClick={handleSelectMessageorAppoint}
          >
            APPOINTMENTS
          </h3>
        </div>

        <div
          className={
            appointormessage === "Message"
              ? "overflow-x-scroll h-[310px] mt-5 px-6"
              : "hidden"
          }
        >
          <table className="max-w-[800px] min-w-[750px] md:w-full md:min-w-full">
            <thead className=" text-left border-b-2 border-[#ddeef5] bg-white sticky top-0 ">
              <tr className="">
                <th className="px-2 ">Name</th>
                <th className="px-2">Email</th>
                <th className="px-2">Number</th>
                <th className="px-2">Message</th>

                <th
                  className="px-2 flex"
                  onClick={() => handleSortMessages("date")}
                >
                  Date {renderSortIconMessage("date")}
                </th>
                <th className="px-2"></th>
              </tr>
            </thead>
            <tbody>
              {pagmessages.map((message) => (
                <tr className=" border-b-2 border-[#ddeef5]">
                  <td className="px-2">{message.name}</td>
                  <td className="px-2"> {message.email}</td>
                  <td className="px-2">{message.number}</td>
                  <td className=" px-2 max-w-[220px]">{message.notes}</td>
                  <td className="px-2">
                    {moment(message.date).format("MMM/DD/YYYY")}
                  </td>
                  <td className=" px-2">
                    <AiOutlineDelete
                      className="cursor-pointer"
                      onClick={() => deleteMessage(message)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={appointormessage === "Message" ? "px-5" : "hidden"}>
          <Pagination
            itemsCount={allMessages[filterBy].length}
            pageS={pageSize}
            currentPage={currentPageMessage}
            prevbt={prevPageMessage}
            nextbt={nextPageMessage}
            pxsonpage={pagmessages.length}
          />
        </div>

        <div
          className={
            appointormessage === "Appoint"
              ? "overflow-x-scroll  h-[320px] mt-5 px-6"
              : "hidden"
          }
        >
          <table className=" w-full ">
            <thead className="text-left border-b-2 border-[#ddeef5] bg-white sticky top-0 ">
              <tr>
                <th className="px-2">Service</th>
                <th
                  className="px-2 flex"
                  onClick={() => handleSortBooking("date")}
                >
                  On/After {renderSortIconBooking("date")}
                </th>
                <th className="px-2">Day</th>
                <th className="px-2">Name</th>
                <th className="px-2">Number</th>
                <th className="px-2">Email</th>
                <th className="px-2">Note</th>
                <th className="px-2">Booked/Not</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {pagAppoint.map((book) => (
                <tr className=" border-b-2 border-[#ddeef5]">
                  <td className="px-2">{book.service}</td>
                  <td className="px-2">
                    {" "}
                    {moment(book.date).format("MMM/DD/YYYY")}
                  </td>
                  <td className="px-2 min-w-[90px] ">
                    {book.day}
                    <br />
                    {book.from} - {book.to}
                  </td>

                  <td className=" px-2">{book.fullName}</td>
                  <td className=" px-2">{book.number}</td>
                  <td className=" px-2">{book.email}</td>
                  <td className=" px-2  min-w-[250px] ">{book.notes}</td>
                  <td className="px-2">
                    <Switch
                      style={{
                        backgroundColor: `${book.booked ? "blue" : "#7b8087"}`,
                      }}
                      checked={book.booked}
                      checkedChildren="Booked"
                      unCheckedChildren="Not"
                      onClick={() => editBooking(book)}
                    />
                  </td>
                  <td className="px-2">
                    <AiOutlineDelete
                      className="cursor-pointer"
                      onClick={() => deletBooking(book)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={appointormessage === "Appoint" ? "px-5" : "hidden"}>
          <Pagination
            itemsCount={allBookings[filterBy].length}
            pageS={pageSize}
            currentPage={currentPageAppoint}
            prevbt={prevPageBooking}
            nextbt={nextPageBooking}
            pxsonpage={pagAppoint.length}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
