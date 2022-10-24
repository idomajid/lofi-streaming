import { useEffect, useState } from "react";
import supabase from "../pages/api/supabase";

export default function RealtimeSchedule() {
  const [scheduleEvent, setScheduleEvent] = useState([]);

  useEffect(() => {
    const fetchScheduleEvent = async () => {
      const { data, error } = await supabase
        .from("scheduleEvent")
        .select()
        .order("id");

      if (data) {
        return setScheduleEvent(data);
      }
    };
    fetchScheduleEvent();

    const channel = supabase.channel("db-scheduleEvent");

    channel
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "scheduleEvent",
        },
        (payload) => {
          console.log(payload);
          fetchScheduleEvent();
        }
      )
      .subscribe((status, error) => {
        console.log({ status });
      });
  }, []);

  console.log({ scheduleEvent });

  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Time
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Speakers
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Title
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {scheduleEvent.map((schedule) => {
                    return (
                      <tr
                        style={{
                          background: schedule.live ? "#3B81F6" : "none",
                        }}
                        key={schedule.id}
                        className="bg-gray-100 border-b"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {schedule.id}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {schedule.time}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {schedule.speakers}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {schedule.title}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
