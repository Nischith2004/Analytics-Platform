import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import {
  ArrowLeft,
  Clock3,
  MousePointerClick,
  Globe,
  Activity,
} from "lucide-react";

import Loader from "../components/common/Loader";
import Error from "../components/common/Error";
import SessionTimeline from "../components/dashboard/SessionTimeline";

import { getSessionDetails } from "../services/analyticsService";

export default function SessionDetails() {
  const { id } = useParams();

  const [session, setSession] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const response = await getSessionDetails(id);

        setSession(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [id]);

  if (loading) return <Loader />;

  if (error) return <Error message="Unable to load session." />;

  return (
    <div className="space-y-8">
      <Link
        to="/sessions"
        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
      >
        <ArrowLeft size={18} />
        Back to Sessions
      </Link>

      {/* Header */}

      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-slate-400">Session</p>

            <h1 className="text-3xl font-bold mt-2">{session.sessionId}</h1>
          </div>

          <span className="rounded-full bg-green-500/10 text-green-400 px-4 py-2">
            ● Active
          </span>
        </div>
      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Stat
          icon={<Activity />}
          title="Events"
          value={session.events.length}
        />

        <Stat
          icon={<MousePointerClick />}
          title="Clicks"
          value={session.events.filter((e) => e.eventType === "click").length}
        />

        <Stat
          icon={<Globe />}
          title="Pages"
          value={new Set(session.events.map((e) => e.pageUrl)).size}
        />

        <Stat icon={<Clock3 />} title="Duration" value="5 min" />
      </div>

      {/* Timeline */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2">
          <SessionTimeline events={session.events} />
        </div>

        <div>
          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-xl font-bold mb-6">Session Information</h2>

            <Info
              label="Started"
              value={new Date(session.startedAt).toLocaleString()}
            />

            <Info
              label="Last Activity"
              value={new Date(session.lastActivity).toLocaleString()}
            />

            <Info label="Session ID" value={session.sessionId} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({
  icon,

  title,

  value,
}) {
  return (
    <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6">
      <div className="flex justify-between">
        {icon}

        <span className="text-slate-500">{title}</span>
      </div>

      <h2 className="text-4xl font-bold mt-6">{value}</h2>
    </div>
  );
}

function Info({
  label,

  value,
}) {
  return (
    <div className="mb-6">
      <p className="text-slate-500 text-sm">{label}</p>

      <h3 className="mt-1 break-all">{value}</h3>
    </div>
  );
}
