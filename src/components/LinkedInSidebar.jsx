import zarinPhoto from "../assets/zarin-photo.png";
import linkedinCover from "../assets/ln-cover.jpg";

const PROFILE_URL = "https://www.linkedin.com/in/zarin-tasnim-0a7a47354";

/* ------------------------------------------------------------------
   YOUR POSTS — edit this list.
   LinkedIn does not let a normal website read your posts automatically
   (that API is restricted to approved partners), so you paste the
   details of 2–3 posts here. To add a new post, copy one block to the
   TOP of the list. Only the first MAX_POSTS are shown.

   url   : open your post on LinkedIn → ••• → "Copy link to post"
   date  : YYYY-MM-DD
   text  : the post text (long text is cut to 3 lines automatically)
   image : optional – import an image and put it here, or leave null
   likes / comments : numbers from your post
   ------------------------------------------------------------------ */
const MAX_POSTS = 2;

const posts = [
  {
    id: "post-1",
    url: "https://www.linkedin.com/in/zarin-tasnim-0a7a47354/recent-activity/all/",
    date: "2026-09-20",
    text: "🚀 Another step forward in my frontend development journey — SunCart!Building projects has been one of the most effective ways for me to turn what I learn into practical experience...",
    image: null,
    likes: 24,
    comments: 3,
  },
  {
    id: "post-2",
    url: "https://www.linkedin.com/in/zarin-tasnim-0a7a47354/recent-activity/all/",
    date: "2026-08-30",
    text: "Starting my journey as a Frontend Developer Intern at Creative Software Bangladesh. Grateful for the opportunity to learn and grow!",
    image: null,
    likes: 41,
    comments: 7,
  },
];

const services = [
  {
    title: "Frontend Development",
    text: "Building modern and responsive web interfaces.",
  },
  {
    title: "React & Next.js",
    text: "Creating user-friendly applications with modern tools.",
  },
  {
    title: "UI Development",
    text: "Turning ideas and designs into functional interfaces.",
  },
];

/* ---------- small inline icons ---------- */
function LinkedInLogo({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function LikeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 10v11M7 10 11 3a2 2 0 0 1 2 2v4h6a2 2 0 0 1 2 2.3l-1.4 8A2 2 0 0 1 17.6 21H7" />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-5.4A8 8 0 1 1 21 12Z" />
    </svg>
  );
}

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

function LinkedInSidebar() {
  return (
    <aside className="linkedin-sidebar">
      {/* Cover */}
      <div className="linkedin-cover">
        <img src={linkedinCover} alt="LinkedIn cover" />
      </div>

      {/* Profile */}
      <div className="linkedin-profile">
        <div className="linkedin-photo">
          <img src={zarinPhoto} alt="Zarin Tasnim" />
        </div>

        <h3>Zarin Tasnim</h3>

        <p className="linkedin-role">
          Information Technology Student & Frontend Developer
        </p>

        <p className="linkedin-location">
          <PinIcon />
          Dhaka, Bangladesh
        </p>

        <div className="linkedin-stats">
          <div>
            <strong>52</strong>
            <span>Connections</span>
          </div>
          <div>
            <strong>53</strong>
            <span>Followers</span>
          </div>
          <div>
            <strong>Web</strong>
            <span>Developer</span>
          </div>
        </div>

        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-follow"
        >
          <LinkedInLogo />
          Follow on LinkedIn
        </a>
      </div>

      {/* Recent posts */}
      <div className="linkedin-posts">
        <div className="linkedin-section-title">
          <h3>Recent Posts</h3>
          <a href={`${PROFILE_URL}/recent-activity/all/`} target="_blank" rel="noopener noreferrer">
            See all
          </a>
        </div>

        {posts.slice(0, MAX_POSTS).map((post) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-post-card"
          >
            <div className="linkedin-post-head">
              <img src={zarinPhoto} alt="" className="linkedin-post-avatar" />
              <div>
                <strong>Zarin Tasnim</strong>
                <span>{formatDate(post.date)}</span>
              </div>
              <span className="linkedin-post-logo">
                <LinkedInLogo size={15} />
              </span>
            </div>

            <p className="linkedin-post-text">{post.text}</p>

            {post.image && (
              <img src={post.image} alt="" className="linkedin-post-image" />
            )}

            <div className="linkedin-post-meta">
              <span>
                <LikeIcon /> {post.likes}
              </span>
              <span>
                <CommentIcon /> {post.comments}
              </span>
              <span className="linkedin-post-view">View post ↗</span>
            </div>
          </a>
        ))}
      </div>

      {/* What I do */}
      <div className="linkedin-services">
        <div className="linkedin-section-title">
          <h3>What I Do</h3>
        </div>

        <ul className="linkedin-service-list">
          {services.map((service) => (
            <li key={service.title}>
              <strong>{service.title}</strong>
              <p>{service.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-work-button"
      >
        Let's Connect
      </a>
    </aside>
  );
}

export default LinkedInSidebar;