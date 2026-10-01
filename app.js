/**
 * ADANI UNIVERSITY - STUDENT PORTAL MASTER JAVASCRIPT
 * Simple, intuitive, clean and easily understandable dataset & rendering
 */

// --- 1. CORE STUDENT PROFILE (ADANI UNIVERSITY) ---
const studentProfile = {
  name: "Neer Patel",
  enrollmentNo: "2201ADANI042",
  university: "Adani University",
  campus: "Shantigram Campus, Ahmedabad, Gujarat",
  department: "Department of Computer Science & Engineering",
  degree: "Bachelor of Technology (B.Tech - CSE)",
  batch: "2022 - 2026",
  currentSem: "3rd Year • Semester 5",
  email: "neer.patel@adaniuni.ac.in",
  cgpa: 8.84,
  attendance: "92.4%",
  creditsEarned: "96 / 160",
  internshipsDone: 2,
  hackathonWins: 3,
  clubsActive: 3
};

// --- 2. ACADEMIC YEAR JOURNEY (EASY TO UNDERSTAND BY YEAR) ---
const yearJourney = [
  {
    yearName: "1st Year (Foundations)",
    period: "2022 - 2023",
    badge: "SGPA: 8.84",
    statusClass: "",
    summary: "Built strong fundamentals in programming, logic, and mathematics.",
    items: [
      { icon: "fa-solid fa-code", text: "Mastered C & C++ programming, pointers, and memory concepts." },
      { icon: "fa-solid fa-calculator", text: "Studied Linear Algebra, Calculus, and Digital Logic with Distinction." },
      { icon: "fa-solid fa-users", text: "Inducted into Adani University Coding Club and NSS Volunteer Cell." }
    ]
  },
  {
    yearName: "2nd Year (Core CS & Growth)",
    period: "2023 - 2024",
    badge: "SGPA: 8.84",
    statusClass: "",
    summary: "Explored Data Structures, built projects, and won first hackathons.",
    items: [
      { icon: "fa-solid fa-layer-group", text: "Mastered Data Structures, Algorithms, DBMS, and Operating Systems." },
      { icon: "fa-solid fa-briefcase", text: "Completed 2-month Python & Backend Internship at InnovateTech Labs." },
      { icon: "fa-solid fa-trophy", text: "Secured 2nd Runner-Up in Gujarat State Hackathon & earned NPTEL Elite Silver Medal." }
    ]
  },
  {
    yearName: "3rd Year (Specialization & Impact)",
    period: "2024 - 2025 (Current)",
    badge: "Current Year",
    statusClass: "active-year",
    summary: "Industry internship, leadership role in university clubs, and capstone software.",
    items: [
      { icon: "fa-solid fa-laptop-code", text: "Completed 3-month Frontend React Internship at TechnoCloud Solutions." },
      { icon: "fa-solid fa-crown", text: "Appointed Technical Lead of Adani University Coding Club (120+ juniors mentored)." },
      { icon: "fa-solid fa-diagram-project", text: "Developing Adani Smart Campus System for capstone project." }
    ]
  }
];

// --- 3. RESULTS & MARKSHEETS (CLEAN TABLE) ---
const semesterResults = [
  {
    semIndex: 0,
    title: "Semester 5 (Current)",
    status: "Ongoing • Expected: 9.0+ SGPA",
    sgpa: "In Progress",
    credits: 22,
    courses: [
      { code: "CS501", name: "Analysis & Design of Algorithms (ADA)", credits: 4, theory: "Ongoing", practical: "Ongoing", grade: "Ongoing" },
      { code: "CS502", name: "Database Management Systems (DBMS)", credits: 4, theory: "Ongoing", practical: "Ongoing", grade: "Ongoing" },
      { code: "CS503", name: "Web Technology & Full Stack (MERN)", credits: 4, theory: "Ongoing", practical: "Ongoing", grade: "Ongoing" },
      { code: "CS504", name: "Computer Networks & Architecture", credits: 4, theory: "Ongoing", practical: "Ongoing", grade: "Ongoing" },
      { code: "CS505", name: "Professional Ethics & Management", credits: 3, theory: "Ongoing", practical: "Ongoing", grade: "Ongoing" },
      { code: "CS506", name: "Full Stack Development Practical Lab", credits: 3, theory: "--", practical: "Ongoing", grade: "Ongoing" }
    ]
  },
  {
    semIndex: 1,
    title: "Semester 4",
    status: "Passed • First Class with Distinction",
    sgpa: "8.92",
    credits: 24,
    courses: [
      { code: "CS401", name: "Operating Systems", credits: 4, theory: "AA", practical: "AA", grade: "AA (10/10)" },
      { code: "CS402", name: "Object Oriented Programming using Java", credits: 4, theory: "AA", practical: "AA", grade: "AA (10/10)" },
      { code: "CS403", name: "Discrete Mathematics & Graph Theory", credits: 4, theory: "AB", practical: "--", grade: "AB (9/10)" },
      { code: "CS404", name: "Microprocessors & Embedded Systems", credits: 4, theory: "AB", practical: "AA", grade: "AB (9/10)" },
      { code: "CS405", name: "Operating Systems Laboratory", credits: 2, theory: "--", practical: "AA", grade: "AA (10/10)" },
      { code: "CS406", name: "Java Programming Laboratory", credits: 2, theory: "--", practical: "AA", grade: "AA (10/10)" }
    ]
  },
  {
    semIndex: 2,
    title: "Semester 3",
    status: "Passed • First Class with Distinction",
    sgpa: "8.76",
    credits: 24,
    courses: [
      { code: "CS301", name: "Data Structures & Algorithms", credits: 4, theory: "AA", practical: "AA", grade: "AA (10/10)" },
      { code: "CS302", name: "Digital Logic & Computer Design", credits: 4, theory: "AB", practical: "AA", grade: "AB (9/10)" },
      { code: "CS303", name: "Probability & Statistics for Engineers", credits: 4, theory: "BB", practical: "--", grade: "BB (8/10)" },
      { code: "CS304", name: "Technical Communication & Presentation", credits: 3, theory: "AA", practical: "--", grade: "AA (10/10)" },
      { code: "CS305", name: "Data Structures Practical Lab", credits: 2, theory: "--", practical: "AA", grade: "AA (10/10)" }
    ]
  },
  {
    semIndex: 3,
    title: "Semester 2",
    status: "Passed • First Class with Distinction",
    sgpa: "8.80",
    credits: 22,
    courses: [
      { code: "CS201", name: "Advanced C Programming", credits: 4, theory: "AA", practical: "AA", grade: "AA (10/10)" },
      { code: "CS202", name: "Linear Algebra & Vector Calculus", credits: 4, theory: "AB", practical: "--", grade: "AB (9/10)" },
      { code: "CS203", name: "Basic Electronics Engineering", credits: 4, theory: "AB", practical: "AA", grade: "AB (9/10)" },
      { code: "CS204", name: "Environmental Studies & Ecology", credits: 3, theory: "AA", practical: "--", grade: "AA (10/10)" }
    ]
  },
  {
    semIndex: 4,
    title: "Semester 1",
    status: "Passed • First Class with Distinction",
    sgpa: "8.88",
    credits: 22,
    courses: [
      { code: "CS101", name: "Introduction to Computer Systems & C", credits: 4, theory: "AA", practical: "AA", grade: "AA (10/10)" },
      { code: "CS102", name: "Calculus & Differential Equations", credits: 4, theory: "AA", practical: "--", grade: "AA (10/10)" },
      { code: "CS103", name: "Engineering Physics", credits: 4, theory: "AB", practical: "AA", grade: "AB (9/10)" },
      { code: "CS104", name: "Engineering Graphics & Design", credits: 3, theory: "AB", practical: "AA", grade: "AB (9/10)" }
    ]
  }
];

// --- 4. COMPLETED INTERNSHIPS ---
const internships = [
  {
    role: "Frontend Web Developer Intern",
    company: "TechnoCloud Solutions",
    duration: "June 2026 - August 2026 (3 Months)",
    stipend: "Paid Internship",
    tech: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "REST APIs", "Git"],
    summary: "Engineered responsive client portals and dashboards. Reduced initial load time by 35% through code-splitting and asset optimization. Collaborated directly with senior engineers in Agile sprints.",
    certId: "ADANI-INTERN-2026-T88"
  },
  {
    role: "Python & Backend Developer Intern",
    company: "InnovateTech Labs",
    duration: "Dec 2025 - Jan 2026 (2 Months)",
    stipend: "Paid Internship",
    tech: ["Python", "Flask", "PostgreSQL", "HTML/CSS", "Postman", "Docker"],
    summary: "Built automated data ingestion pipelines and REST endpoints. Wrote complex PostgreSQL SQL queries for event analytics and student logging.",
    certId: "ADANI-INTERN-2026-I42"
  }
];

// --- 5. ADANI UNIVERSITY CLUBS & LEADERSHIP ---
const clubs = [
  {
    name: "Adani University Coding Club",
    role: "Technical Lead & Senior Mentor",
    icon: "fa-solid fa-code",
    color: "blue",
    desc: "Heads competitive programming contests and workshops. Mentored 120+ junior students in C++, Data Structures, and Web Development. Organized 5 campus-wide coding tournaments.",
    metrics: "5+ Contests Hosted • 120+ Students Mentored"
  },
  {
    name: "Adani Social Outreach & NSS",
    role: "Volunteer & Digital Coordinator",
    icon: "fa-solid fa-handshake-angle",
    color: "green",
    desc: "Coordinated digital promotions, student registrations, and media for blood donation drives, tree plantations, and rural community digital literacy initiatives.",
    metrics: "80+ Volunteer Hours • 4 Major Drives"
  },
  {
    name: "Adani Robotics & Automation Club",
    role: "Firmware & Software Member",
    icon: "fa-solid fa-robot",
    color: "purple",
    desc: "Programmed Arduino firmware and sensory algorithms for obstacle-avoiding and Bluetooth-controlled robots representing Adani University in regional contests.",
    metrics: "2 Robots Built • 3 Regional Contests"
  }
];

// --- 6. HACKATHONS WON & RECOGNITIONS ---
const hackathons = [
  {
    title: "Smart India Hackathon (SIH 2026)",
    organizer: "Ministry of Education & AICTE",
    result: "National Finalist",
    podiumClass: "gold",
    icon: "fa-solid fa-medal",
    date: "August 2026",
    summary: "AI-powered urban traffic optimization system built for municipal bodies."
  },
  {
    title: "Gujarat State Youth Hackathon",
    organizer: "Gujarat Knowledge Society",
    result: "2nd Runner Up (₹25,000 Prize)",
    podiumClass: "silver",
    icon: "fa-solid fa-trophy",
    date: "February 2026",
    summary: "Automated crop disease diagnosis and farmer advisory web platform."
  },
  {
    title: "Adani Intra-University Innovation Hack",
    organizer: "Adani University Coding Club",
    result: "1st Rank (Winner)",
    podiumClass: "bronze",
    icon: "fa-solid fa-crown",
    date: "October 2025",
    summary: "Digital paperless campus visitor and gate pass authorization app."
  }
];

// --- 7. KEY CAPSTONE PROJECTS ---
const projects = [
  {
    title: "Adani Smart Campus & Event Hub",
    type: "University Capstone Project",
    desc: "A centralized portal with automated exam clash detection and live campus fest registrations built with HTML, CSS, and Vanilla JavaScript.",
    tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage"]
  },
  {
    title: "AI Facial Attendance & Analytics",
    type: "Semester 4 Mini Project",
    desc: "Automated student attendance tracking with OpenCV face recognition that exports attendance reports directly to CSV/Excel for faculty.",
    tech: ["Python", "OpenCV", "SQLite", "Tkinter"]
  },
  {
    title: "Adani Peer-to-Peer Study Notes Bank",
    type: "Semester 3 Project",
    desc: "A searchable resource repository where engineering students can download syllabus notes, previous question papers, and lab code.",
    tech: ["JavaScript", "Node.js", "Express", "MongoDB"]
  }
];

// --- 8. CERTIFICATIONS ---
const certifications = [
  {
    name: "NPTEL: Design & Analysis of Algorithms",
    issuedBy: "IIT Madras / NPTEL",
    badge: "Elite Silver Medal (Top 5%)",
    icon: "fa-solid fa-award"
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuedBy: "Amazon Web Services (AWS)",
    badge: "Certified (Score: 860/1000)",
    icon: "fa-brands fa-aws"
  },
  {
    name: "5-Star Problem Solving Badge",
    issuedBy: "HackerRank",
    badge: "Golden Badge in Algorithms",
    icon: "fa-solid fa-star"
  },
  {
    name: "Meta Frontend Developer Specialization",
    issuedBy: "Coursera / Meta",
    badge: "Completed with Distinction",
    icon: "fa-brands fa-react"
  }
];

// Current active semester index (Default to Sem 4 completed)
let selectedSem = 1;

// ========================================================
// RENDERING FUNCTIONS
// ========================================================

// 1. Render Academic Journey
function renderJourney() {
  const container = document.getElementById('journeyGrid');
  if (!container) return;

  container.innerHTML = yearJourney.map(y => `
    <div class="glass-card journey-card ${y.statusClass}">
      <div>
        <div class="journey-year-tag">
          <h3 class="year-title">${y.yearName}</h3>
          <span class="year-badge">${y.badge}</span>
        </div>
        <p style="font-size: 0.8rem; color: #94a3b8; margin-bottom: 8px;">
          <i class="fa-regular fa-calendar mr-1"></i> ${y.period}
        </p>
        <p style="font-size: 0.85rem; color: #e2e8f0; font-weight: 600; margin-bottom: 14px;">
          ${y.summary}
        </p>
        <ul class="journey-highlights-list">
          ${y.items.map(item => `
            <li class="journey-item">
              <i class="${item.icon}"></i>
              <span>${item.text}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

// 2. Render Semester Selector Buttons
function renderSemesterButtons() {
  const container = document.getElementById('semButtons');
  if (!container) return;

  container.innerHTML = semesterResults.map((s, idx) => `
    <button 
      class="sem-button ${idx === selectedSem ? 'active' : ''}" 
      onclick="changeSemester(${idx})">
      <i class="fa-solid fa-book-bookmark mr-1"></i> ${s.title}
    </button>
  `).join('');
}

function changeSemester(idx) {
  selectedSem = idx;
  renderSemesterButtons();
  renderMarksheet();
}

// 3. Render Marksheet Table
function renderMarksheet() {
  const sem = semesterResults[selectedSem];
  const container = document.getElementById('marksheetArea');
  if (!container || !sem) return;

  container.innerHTML = `
    <div class="marksheet-header-banner">
      <div class="marksheet-info">
        <h4>${sem.title} — Official Course Grades</h4>
        <p>Adani University • Department of Computer Science & Engineering • <strong>${sem.status}</strong></p>
      </div>
      <div class="marksheet-pills">
        <span class="pill-sgpa"><i class="fa-solid fa-star mr-1"></i> SGPA: ${sem.sgpa}</span>
        <span class="pill-sgpa" style="background: rgba(59, 130, 246, 0.15); border-color: rgba(59, 130, 246, 0.3); color: #60a5fa;">
          <i class="fa-solid fa-award mr-1"></i> Credits: ${sem.credits}
        </span>
      </div>
    </div>

    <div class="table-responsive">
      <table class="clean-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Course Name</th>
            <th>Credits</th>
            <th>Theory</th>
            <th>Practical</th>
            <th>Grade Earned</th>
          </tr>
        </thead>
        <tbody>
          ${sem.courses.map(c => {
            let tagClass = "aa";
            if (c.grade.includes("AB")) tagClass = "ab";
            else if (c.grade.includes("BB")) tagClass = "bb";
            else if (c.grade === "Ongoing") tagClass = "ab";

            return `
              <tr>
                <td><strong style="color: #60a5fa;">${c.code}</strong></td>
                <td style="font-weight: 600;">${c.name}</td>
                <td>${c.credits}</td>
                <td>${c.theory}</td>
                <td>${c.practical}</td>
                <td><span class="grade-tag ${tagClass}">${c.grade}</span></td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
}

// 4. Render Internships
function renderInternships() {
  const container = document.getElementById('internshipsGrid');
  if (!container) return;

  container.innerHTML = internships.map(i => `
    <div class="glass-card intern-card">
      <div>
        <div class="intern-head">
          <div>
            <h3 class="intern-title">${i.role}</h3>
            <div class="intern-company">${i.company}</div>
          </div>
          <span class="intern-time">${i.duration}</span>
        </div>

        <p class="intern-summary">${i.summary}</p>

        <div class="intern-stack">
          ${i.tech.map(t => `<span class="stack-pill">${t}</span>`).join('')}
        </div>
      </div>

      <div style="padding-top: 14px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 0.74rem; color: var(--text-muted);">Credential: <strong>${i.certId}</strong></span>
        <button class="btn-secondary" onclick="showCertModal('${i.role}', '${i.company}', '${i.certId}')" style="padding: 6px 14px; font-size: 0.78rem;">
          <i class="fa-solid fa-certificate text-blue-400 mr-1"></i> Verify Certificate
        </button>
      </div>
    </div>
  `).join('');
}

// 5. Render Clubs
function renderClubs() {
  const container = document.getElementById('clubsGrid');
  if (!container) return;

  container.innerHTML = clubs.map(c => {
    let iconBg = "rgba(59, 130, 246, 0.15)";
    let iconColor = "#60a5fa";
    if (c.color === "green") { iconBg = "rgba(16, 185, 129, 0.15)"; iconColor = "#34d399"; }
    else if (c.color === "purple") { iconBg = "rgba(139, 92, 246, 0.15)"; iconColor = "#c084fc"; }

    return `
      <div class="glass-card club-card">
        <div>
          <div class="club-top-row">
            <div class="club-icon-circle" style="background: ${iconBg}; color: ${iconColor};">
              <i class="${c.icon}"></i>
            </div>
            <div>
              <h3 class="club-name">${c.name}</h3>
              <div class="club-role-title">${c.role}</div>
            </div>
          </div>
          <p class="club-desc">${c.desc}</p>
        </div>

        <div class="club-metrics-bar">
          <span>Impact: <strong>${c.metrics}</strong></span>
        </div>
      </div>
    `;
  }).join('');
}

// 6. Render Hackathons Won
function renderHackathons() {
  const container = document.getElementById('hackathonsGrid');
  if (!container) return;

  container.innerHTML = hackathons.map(h => `
    <div class="glass-card hack-item-card">
      <div>
        <div class="hack-badge-row">
          <span class="podium-tag ${h.podiumClass}">
            <i class="${h.icon}"></i> ${h.result}
          </span>
          <span style="font-size: 0.75rem; color: var(--text-muted);">${h.date}</span>
        </div>
        <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 4px;">${h.title}</h3>
        <p style="font-size: 0.8rem; color: #60a5fa; margin-bottom: 10px;">${h.organizer}</p>
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); padding: 10px 12px; border-radius: 8px; font-size: 0.82rem; color: #cbd5e1;">
          ${h.summary}
        </div>
      </div>
    </div>
  `).join('');
}

// 7. Render Projects
function renderProjects() {
  const container = document.getElementById('projectsGrid');
  if (!container) return;

  container.innerHTML = projects.map(p => `
    <div class="glass-card project-card">
      <div>
        <span class="project-kind">${p.type}</span>
        <h3 class="project-heading">${p.title}</h3>
        <p class="project-text">${p.desc}</p>
        <div class="intern-stack">
          ${p.tech.map(t => `<span class="stack-pill">${t}</span>`).join('')}
        </div>
      </div>

      <div style="padding-top: 14px; border-top: 1px solid var(--border-subtle); display: flex; gap: 12px;">
        <button class="btn-secondary" onclick="alert('Viewing repository on GitHub');" style="padding: 6px 12px; font-size: 0.78rem;">
          <i class="fa-brands fa-github mr-1"></i> Source Code
        </button>
        <button class="btn-secondary" onclick="alert('Launching project demo preview');" style="padding: 6px 12px; font-size: 0.78rem;">
          <i class="fa-solid fa-arrow-up-right-from-square mr-1"></i> Demo
        </button>
      </div>
    </div>
  `).join('');
}

// 8. Render Certifications
function renderCertifications() {
  const container = document.getElementById('certsGrid');
  if (!container) return;

  container.innerHTML = certifications.map(c => `
    <div class="glass-card" style="padding: 20px; display: flex; align-items: center; gap: 16px;">
      <div style="width: 48px; height: 48px; border-radius: 12px; background: rgba(245, 158, 11, 0.15); color: #fbbf24; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; flex-shrink: 0;">
        <i class="${c.icon}"></i>
      </div>
      <div>
        <h4 style="font-size: 0.95rem; font-weight: 800;">${c.name}</h4>
        <div style="font-size: 0.78rem; color: var(--text-muted);">${c.issuedBy}</div>
        <div style="font-size: 0.75rem; color: #34d399; font-weight: 700; margin-top: 2px;">${c.badge}</div>
      </div>
    </div>
  `).join('');
}

// Modal Handlers
function showCertModal(role, company, id) {
  const modal = document.getElementById('certModal');
  document.getElementById('modalRole').innerText = role;
  document.getElementById('modalCompany').innerText = `${company} • Adani University Verified`;
  document.getElementById('modalCertId').innerText = id;
  modal.classList.add('active');
}

function hideCertModal() {
  const modal = document.getElementById('certModal');
  if (modal) modal.classList.remove('active');
}

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
  renderJourney();
  renderSemesterButtons();
  renderMarksheet();
  renderInternships();
  renderClubs();
  renderHackathons();
  renderProjects();
  renderCertifications();

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hideCertModal();
  });
});
