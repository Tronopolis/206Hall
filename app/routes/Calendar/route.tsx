import { useState, FC, SVGProps } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {
  parseISO,
  parse,
  add,
  eachDayOfInterval,
  format,
  startOfWeek,
  endOfMonth,
  getDay,
  startOfToday,
  endOfWeek,
  isToday,
  isSameMonth,
  isEqual,
  isSameDay,
} from "date-fns";
import PropTypes from "prop-types";

interface MeetingType {
  id: number;
  name: string;
  start: string;
  end: string;
}

const meetings: MeetingType[] = [
  {
    id: 1,
    name: "Alcoholic Annonymous",
    start: "2024-09-23T13:00",
    end: "2024-09-23T14:30",
  },
  {
    id: 2,
    name: "Narcotics Annonymous",
    start: "2024-09-23T14:30",
    end: "2024-09-23T16:30",
  },
];

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const Calendar = () => {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMMM-yyyy"));
  const firstDayCurrentMonth = parse(currentMonth, "MMMM-yyyy", new Date());

  const days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });

  const nextMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMMM-yyyy"));
  };
  const previousMonth = () => {
    const firstDayPreviousMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayPreviousMonth, "MMMM-yyyy"));
  };
  const selectedDayMeetings = (
    meetings: MeetingType[],
    selectedDay: Date
  ): MeetingType[] => {
    return meetings.filter((meeting) =>
      isSameDay(parseISO(meeting.start), selectedDay)
    );
  };
  
  return (
    <div className="pt-16">
      <div className="max-w-xl px-4 mx-auto sm:px-7 md:max-w-5xl md:px-6">
        <h1 className="text-2xl font-semibold items-center text-gray-900 text-center p-8">Scheduler</h1>
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
          <div className="md:pr-14">
            <div className="flex items-center">
              <h2 className="flex-auto font-semibold text-gray-900">
                {format(firstDayCurrentMonth, "MMMM yyyy")}
              </h2>
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none items-center justify-center
                                p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={nextMonth}
                className="-my-1.5 flex flex-none items-center justify-center
                                p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <div
              className="grid grid-cols-7 mt-10 text-xs leading-6 text-center
                            text-gray-500"
            >
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm">
              {days.map((day, index) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    index === 0 ? colStartClasses[getDay(day)] : "",
                    "py-1.5"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={classNames(
                      isEqual(day, selectedDay) ? "text-white" : "",
                      !isEqual(day, selectedDay) && isToday(day)
                        ? "text-red-500"
                        : "",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth)
                        ? "text-gray-900"
                        : "",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth)
                        ? "text-gray-400"
                        : "",
                      isEqual(day, selectedDay) && isToday(day)
                        ? "bg-indigo-600"
                        : "",
                      isEqual(day, selectedDay) && !isToday(day)
                        ? "bg-gray-900"
                        : "",
                      !isEqual(day, selectedDay) ? "hover:bg-gray-200" : "",
                      isEqual(day, selectedDay) || isToday(day)
                        ? "font-semibold"
                        : "",
                      "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                    )}
                  >
                    <time dateTime={format(day, "yyyy-MM-dd")}>
                      {format(day, "d")}
                    </time>
                  </button>
                  <div className="w-1 h-1 mx-auto mt-1">
                    {meetings.some((meeting) =>
                      isSameDay(parseISO(meeting.start), day)
                    ) && (
                      <div className="w-1 h-1 bg-sky-500 rounded-full"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <section className="mt-12 md:mt-0 md:pl-14">
            <h2 className="font-semibold text-gray-900">
              Schedule for{" "}
              <time dateTime={format(selectedDay, "yyyy-MM-dd")}>
                {format(selectedDay, "MMM dd, yyyy")}
              </time>
            </h2>
            <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
              {selectedDayMeetings(meetings, selectedDay).length > 0 ? (
                selectedDayMeetings(meetings, selectedDay).map(
                  (meeting: MeetingType) => (
                    <Meeting
                      key={meeting.id.toString()}
                      meeting={{ ...meeting, id: meeting.id.toString() }}
                    />
                  )
                )
              ) : (
                <p>No meetings for today.</p>
              )}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
};

interface MeetingProps {
  meeting: {
    id: string;
    name: string;
    start: string;
    end: string;
  };
}

const Meeting: React.FC<MeetingProps> = ({ meeting }) => {
  const startDateTime = parseISO(meeting.start);
  const endDateTime = parseISO(meeting.end);
  return (
    <li
      key={meeting.id}
      className="flex items-center px-4 py-2 space-x-4 group 
                  rounded-xl focus-within:bg-gray-100 hover:bg-gray-100"
    >      
      <div className="flex-auto">
        <p className="text-gray-900">{meeting.name}</p>
        <p className="mt-0.5">
          <time dateTime={meeting.start}>
            {format(startDateTime, "h:mm a")}
          </time>{" "}
          - <time dateTime={meeting.end}>{format(endDateTime, "h:mm a")}</time>
        </p>
      </div>
    </li>
  );
};

Meeting.propTypes = {
  meeting: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    imageUrl: PropTypes.oneOfType([
      PropTypes.elementType as PropTypes.Validator<FC<SVGProps<SVGSVGElement>>>
    ]).isRequired,
  }).isRequired,
};

const colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

export default Calendar;
