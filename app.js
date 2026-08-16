// ---------- ICONS ----------
const ICONS = {
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0115.4-6.4M21 12a9 9 0 01-15.4 6.4"/><path d="M3 4v5h5M21 20v-5h-5"/></svg>',
  chevRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
  alertTriangle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>',
  pill: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4.5" y="4.5" width="15" height="15" rx="7.5" transform="rotate(45 12 12)"/><line x1="8.5" y1="15.5" x2="15.5" y2="8.5"/></svg>',
  droplet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.5s7 7.5 7 12.5a7 7 0 01-14 0c0-5 7-12.5 7-12.5z"/></svg>',
  scalpel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l6-6"/><path d="M9 15L20 4a1.5 1.5 0 00-2-2L7 13"/><path d="M7 13l2 2"/></svg>',
  searchSmall: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>',
  stethoscope: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 3v6a4.5 4.5 0 009 0V3"/><path d="M4.5 3h-2M13.5 3h-2"/><path d="M9 13.5V16a6 6 0 006 6 6 6 0 006-6v-1.5"/><circle cx="19.5" cy="9" r="2"/><path d="M19.5 11v2.5"/></svg>',
  dumbbell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1.5" y="9.5" width="3" height="5" rx="1"/><rect x="19.5" y="9.5" width="3" height="5" rx="1"/><line x1="4.5" y1="12" x2="19.5" y2="12"/><rect x="6.5" y="7" width="2.4" height="10" rx="1"/><rect x="15.1" y="7" width="2.4" height="10" rx="1"/></svg>',
  bodyFigure: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4.5" r="2.3"/><path d="M12 7.5v6.5"/><path d="M7.5 11l4.5-2 4.5 2"/><path d="M8.5 21l3.5-7 3.5 7"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2.5 2.5 8 12 13.5 21.5 8 12 2.5"/><polyline points="2.5 15.5 12 21 21.5 15.5"/><polyline points="2.5 11.75 12 17.25 21.5 11.75"/></svg>',
  syringe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l3.5-1 10-10-2.5-2.5-10 10L3 21z"/><path d="M13 8l3-3M16 5l3 3M10.5 10.5l2 2"/><path d="M17.5 3.5l3 3"/></svg>',
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7.5" height="7.5" rx="1.3"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.3"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.3"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.3"/></svg>',
  route: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2.6"/><circle cx="18" cy="18" r="2.6"/><circle cx="18" cy="6" r="2.6"/><path d="M8.6 6h6.8M18 8.6V15.4"/></svg>',
  scope: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9.5"/><line x1="14.3" y1="8" x2="19.5" y2="17"/><line x1="9.7" y1="8" x2="20" y2="8"/><line x1="7.6" y1="12" x2="12.9" y2="3"/><line x1="9.7" y1="16" x2="4" y2="6.5"/><line x1="14.3" y1="16" x2="3.5" y2="16"/><line x1="16.4" y1="12" x2="11" y2="21"/></svg>',
  imageScan: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.6"/><path d="M21 15.5l-5.3-5.3a1.5 1.5 0 00-2.1 0L3 20.5"/></svg>',
  bed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 19.5v-7a2 2 0 012-2h15a2 2 0 012 2v7"/><path d="M2.5 19.5v-2.8a1 1 0 011-1h17a1 1 0 011 1v2.8"/><path d="M6 10.5V7a2 2 0 012-2h2.5"/><circle cx="7" cy="8.5" r="1"/></svg>',
};
function flagIcon(flag) {
  if (flag === "red" || flag === "amber") return ICONS.alertTriangle;
  return ICONS.info;
}


// ---------- EXAMINATION TECHNIQUE (the practical how/where walkthrough) ----------
const historyChecklist = [
  { item: "Occupation", ask: "Type of work, repetitive overhead demand.", why: "Overhead workers (painters, electricians) trend toward impingement. Heavy manual labourers trend toward cuff tears from cumulative loading. Throwing athletes trend toward SLAP and instability." },
  { item: "Hand dominance", ask: "Which side is dominant, and is the symptomatic side the dominant one.", why: "A dominant-side problem carries greater functional impact and shapes urgency + surgical downtime tolerance." },
  { item: "Pain pattern", ask: "Site, radiation, onset (acute vs insidious), character, aggravating/relieving factors, night pain, VAS.", why: "Aggravating factor often localises the structure \u2014 overhead motion suggests supraspinatus/impingement; behind-the-back motion suggests subscapularis/anterior capsule." },
  { item: "Stiffness", ask: "Duration of morning stiffness, which specific movements are restricted.", why: "Restriction across ALL planes points capsular (adhesive capsulitis); restriction limited to specific movements points tendon/extra-articular." },
  { item: "Weakness", ask: "Sudden or gradual onset, which specific movement is weak.", why: "Sudden weakness post-trauma is a red flag for an acute complete cuff tear \u2014 needs urgent assessment. Gradual weakness fits a chronic tear or, less commonly, a nerve lesion." },
  { item: "Trauma mechanism", ask: "Fall on outstretched hand, direct blow, forced rotation.", why: "FOOSH classically produces cuff tears or proximal humerus fractures. Direct blow to the point of the shoulder produces AC injuries. Forced ER in abduction produces anterior labral tears." },
  { item: "Cervical spine screen", ask: "Radiation into the arm, numbness/tingling, Spurling's test.", why: "Cervicogenic pain frequently mimics shoulder pathology. \u201cDouble crush\u201d (cervical + peripheral nerve compression together) should be actively excluded, not assumed absent." },
  { item: "Previous treatment response", ask: "Number of prior injections and how much/how long they helped; physiotherapy compliance; prior surgery.", why: "The response pattern is itself diagnostic \u2014 dramatic but short-lived relief from a subacromial injection supports an extra-articular impingement-type process." },
];

const examSteps = [
  {
    n: 1, title: "Setup & exposure",
    body: "Both shoulders exposed and visible (shirt/gown off) \u2014 always compare with the normal side at every step. Start with the patient standing or sitting; supine positioning comes later for passive ROM.",
  },
  {
    n: 2, title: "Inspection \u2014 front and behind",
    body: "Look from the front: swelling, deformity, scars, skin changes, shoulder contour symmetry. Then step behind the patient: supraspinatus/infraspinatus fossa wasting, scapular resting position, winging at rest.",
  },
  {
    n: 3, title: "Palpation \u2014 3-point routine",
    body: "Patient still standing/sitting. Palpate lateral \u2192 medial \u2192 anterior: AC joint, then coracoid process (1 finger-breadth medial+inferior to AC joint), then bicipital groove (arm in ~10\u00b0 IR). Under a minute, high yield.",
  },
  {
    n: 4, title: "Active ROM \u2014 standing",
    body: "Patient moves the arm themselves: forward flexion, abduction, external rotation (elbow at side), internal rotation (how high up the back the hand reaches). Note any painful arc and how willing the patient is to move.",
  },
  {
    n: 5, title: "Passive ROM \u2014 supine, scapula stabilised",
    body: "Move the patient to supine. One hand stabilises the scapula flat against the table, the other moves the arm \u2014 this eliminates scapular substitution and reveals TRUE glenohumeral motion. This is where the ROM-based 4-pattern algorithm below gets applied. For rotation specifically, test with the shoulder at 90\u00b0 forward flexion (arm toward ceiling, elbow bent 90\u00b0) \u2014 the most accurate position, and where GIRD is formally measured.",
  },
  {
    n: 6, title: "Scapular assessment \u2014 examiner behind the patient",
    body: "Stand behind. Have the patient repeatedly forward-flex holding a light weight in each hand. Watch for medial border prominence, asymmetry, early shrugging, and specifically the lowering phase \u2014 \u201cdumping\u201d (uncontrolled downward rotation) is often more obvious coming down than going up.",
  },
  {
    n: 7, title: "Strength testing \u2014 guided by what you've found so far",
    body: "Test cuff strength in the scapular plane (Jobe's) and, if passive-full/active-restricted pattern present, run the subscapularis 3-test battery (Bear Hug, Belly Press, Lift Off) and lag signs. Resisted testing tells apart pain-inhibition from true structural weakness.",
  },
  {
    n: 8, title: "Special tests \u2014 targeted, not random",
    body: "Pick the test battery based on your ROM pattern and history \u2014 impingement tests for a \u201cboth full\u201d pattern, SLAP tests if IR alone is restricted, instability tests if the history suggests it. Use the interactive tool below.",
  },
  {
    n: 9, title: "Neurovascular check",
    body: "Axillary nerve is the most commonly injured shoulder nerve \u2014 check deltoid sensation (regimental badge area) and contraction, especially post-trauma or before/after any reduction or manipulation.",
  },
];

function renderExamSteps() {
  return examSteps.map(s => `<div class="refItem"><div class="refItemTitle">${s.n}. ${s.title}</div><div class="refItemBody">${s.body}</div></div>`).join("");
}
function renderHistoryChecklist() {
  return historyChecklist.map(h => `<div class="refItem"><div class="refItemTitle">${h.item}</div><div class="refItemBody"><b>Ask:</b> ${h.ask}<br><b>Why:</b> ${h.why}</div></div>`).join("");
}
const screenFlags = [
  { id: "trauma", text: "Trauma / seizure / electrocution history" },
  { id: "sleepboth", text: "Can't sleep on either side", sub: "severe night pain" },
  { id: "suddenacute", text: "Sudden severe pain, minimal trauma", sub: "can barely move the arm" },
  { id: "systemic", text: "Diabetes, thyroid disease, or cardiac surgery/MI history" },
  { id: "malignancy", text: "Malignancy history, or pain unremitting at rest" },
  { id: "instability", text: "Recurrent dislocation, or apprehension", sub: "with abduction + external rotation" },
];

const threePointTenderness = [
  { point: "AC joint", locate: "Palpate clavicle medial\u2192lateral; a step/gap is felt at its lateral end.", suggests: "AC arthritis, or sprain/dislocation if a step deformity is present.", confirm: "Cross-arm adduction, O'Brien's (pain on TOP of shoulder)." },
  { point: "Coracoid process", locate: "One finger-breadth medial + inferior to the AC joint, or follow the deltopectoral groove to its apex.", suggests: "Subcoracoid impingement or subscapularis pathology \u2014 frequently missed.", confirm: "Pain increasing with passive external rotation." },
  { point: "Bicipital groove", locate: "Arm in ~10\u00b0 internal rotation \u2014 groove rotates anteriorly and becomes palpable.", suggests: "Biceps tendinitis \u2014 almost always SECONDARY to RC tear, SLAP, subscapularis tear, impingement or instability. Never treat in isolation.", confirm: "Speed's test, Yergason's test." },
];

const subscapTests = [
  { name: "Bear Hug", fibers: "UPPER fibers (most commonly torn, most missed)", how: "Patient places the palm of the affected hand on the opposite shoulder, elbow held anteriorly elevated. Examiner tries to pull the hand off the shoulder while the patient resists using pure internal rotation force.", positive: "Hand lifts off, or is noticeably weaker than the other side." },
  { name: "Belly Press", fibers: "MIDDLE fibers", how: "Patient presses the hand into the abdomen while actively holding the elbow forward, anterior to the body.", positive: "Patient substitutes by flexing the wrist to maintain pressure, instead of using true internal rotation strength. Useful when IR range is too restricted for Lift Off." },
  { name: "Lift Off (Gerber's)", fibers: "LOWER fibers", how: "Dorsum of the hand placed against the lumbar spine; patient asked to lift the hand directly off the back against resistance.", positive: "Cannot lift the hand away from the back. Needs decent IR range to even attempt \u2014 skip if too stiff/painful." },
];

const lagSigns = [
  { name: "External Rotation Lag Sign", tests: "Infraspinatus + Supraspinatus (whole posterior cuff)", how: "Elbow at the side, flexed 90\u00b0. Examiner passively rotates the arm to near-maximal external rotation, then releases and asks the patient to hold the position.", positive: "Arm \u201clags\u201d or drops back toward internal rotation \u2014 implies massive posterior cuff tear." },
  { name: "Drop Sign", tests: "Infraspinatus specifically", how: "90\u00b0 abduction with the arm held in external rotation, then released.", positive: "Arm drops \u2014 more sensitive than the ER lag sign for an isolated infraspinatus tear." },
  { name: "Hornblower's Sign", tests: "Teres minor", how: "Arm placed in the abduction-external rotation (ABER) position; patient asked to maintain external rotation.", positive: "Elbow drops forward, can't hold ER \u2014 WORST prognosis of all lag signs, typically reverse shoulder arthroplasty territory, not repairable." },
  { name: "Internal Rotation Lag Sign", tests: "Subscapularis", how: "Lift-off position (hand passively lifted off the lower back), then released.", positive: "Can't hold the hand away from the back \u2014 complete subscapularis tear." },
  { name: "Drop Arm Sign", tests: "Supraspinatus", how: "Arm passively abducted to 90\u00b0, then the patient slowly lowers it themselves.", positive: "Arm suddenly drops partway through the lowering arc, rather than descending smoothly \u2014 full-thickness supraspinatus tear." },
];

const ageGroups = [
  { id: "under30", label: "<30 years", note: "Instability and SLAP tear are FAR more likely than degenerative disease at this age." },
  { id: "age30to50", label: "30\u201350 years", note: "Rotator cuff tear, impingement, and calcific tendinitis dominate the differential." },
  { id: "over50", label: ">50 years", note: "Adhesive capsulitis, cuff tear arthropathy, and glenohumeral arthritis become the leading differentials." },
];

const romPatterns = [
  {
    id: "bothrestricted",
    label: "Both active + passive restricted",
    short: "Capsular / mechanical block",
    nextStep: "If ANY trauma / seizure / electrocution history \u2192 get an axillary X-ray before assuming frozen shoulder. The AP view is frequently misleadingly normal.",
    flag: "amber",
    diagnoses: [
      {
        name: "Locked posterior dislocation",
        tests: [{ name: "External rotation check", how: "Attempt both active and passive external rotation with the elbow at the side.", positive: "Complete, fixed loss of ER \u2014 not just painful, mechanically impossible in both active and passive testing.", value: "Post-trauma + zero ER = this diagnosis until an axillary view proves otherwise. Bilateral involvement = assume seizure until disproven." }],
      },
      {
        name: "Adhesive capsulitis (frozen shoulder)",
        note: "No confirmatory special test \u2014 the ROM pattern itself (equal loss of active and passive motion, across all planes) IS the diagnostic finding. Screen for diabetes/thyroid disease, which raise the likelihood.",
        tests: [],
      },
      {
        name: "Glenohumeral arthritis",
        note: "Crepitus felt through passive ROM is a supporting clinical sign. Confirmed on X-ray \u2014 joint space narrowing, osteophytes, subchondral sclerosis \u2014 not by a special test.",
        tests: [],
      },
      {
        name: "Cuff tear arthropathy",
        note: "Elderly patient, pseudoparalysis (can't actively raise the arm despite full passive ROM), crepitus, visible wasting.",
        tests: [
          { name: "Hornblower's sign", how: "Arm placed in the abduction-external rotation (ABER) position; ask the patient to hold external rotation.", positive: "Elbow drops forward, can't hold ER.", value: "Positive here (loss of teres minor) is the clinching finding \u2014 confirms cuff tear arthropathy over simple arthritis, and points straight to RSA." },
        ],
      },
    ],
  },
  {
    id: "passivefull",
    label: "Passive full, active restricted",
    short: "Motor unit problem",
    nextStep: "Formally test cuff strength. Good strength despite restricted active motion \u2192 pain-inhibited impingement, not a tear. Weakness \u2192 work through the tendon-specific tests below to localise which one.",
    flag: "amber",
    diagnoses: [
      {
        name: "Supraspinatus tear",
        tests: [
          { name: "Jobe's test (empty can)", how: "Position the arm at 90\u00b0 abduction with 30\u00b0 forward flexion (scapular plane), full internal rotation (thumb pointing down). Apply downward resistance.", positive: "Weakness and/or pain.", value: "Weakness (not just pain) raises suspicion for a tear, not simple impingement." },
          { name: "Drop Arm sign", how: "Arm passively abducted to 90\u00b0, then the patient slowly lowers it themselves.", positive: "Arm suddenly drops partway through the lowering arc.", value: "Full-thickness supraspinatus tear \u2014 a lag sign, implies complete tendon discontinuity." },
        ],
      },
      {
        name: "Infraspinatus tear",
        tests: [
          { name: "Drop sign", how: "90\u00b0 abduction with the arm held in external rotation, then released.", positive: "Arm drops.", value: "More sensitive than the ER lag sign for an isolated infraspinatus tear." },
          { name: "External Rotation Lag Sign", how: "Elbow at the side, flexed 90\u00b0. Passively rotate to near-maximal ER, release, ask patient to hold.", positive: "Arm lags back toward IR.", value: "Involves infraspinatus + supraspinatus together \u2014 a massive posterior cuff tear if positive." },
        ],
      },
      {
        name: "Teres minor tear",
        tests: [
          { name: "Hornblower's sign", how: "Arm in the ABER position; ask the patient to hold external rotation.", positive: "Elbow drops forward.", value: "WORST prognosis of all lag signs \u2014 typically reverse shoulder arthroplasty territory, not repairable." },
        ],
      },
      {
        name: "Subscapularis tear",
        tests: [
          { name: "Bear Hug", how: "Palm on the opposite shoulder, elbow anteriorly elevated; examiner tries to pull the hand off while the patient resists with pure IR force.", positive: "Hand lifts off or is weaker than the other side.", value: "Tests UPPER fibers \u2014 the most common and most frequently missed subscap tear pattern." },
          { name: "Belly Press", how: "Press the hand into the abdomen while holding the elbow forward.", positive: "Wrist flexes to substitute, instead of true IR strength.", value: "Tests MIDDLE fibers \u2014 useful when IR range is too restricted for Lift Off." },
          { name: "Lift Off (Gerber's)", how: "Dorsum of the hand against the lumbar spine; lift the hand off the back against resistance.", positive: "Can't lift the hand away from the back.", value: "Tests LOWER fibers. Needs decent IR range to attempt." },
        ],
      },
      {
        name: "Deltoid / suprascapular nerve palsy",
        note: "Less common cause of this pattern. Check deltoid contour and sensation over the regimental badge area, and supraspinatus/infraspinatus wasting. EMG/NCS if a nerve lesion is suspected clinically.",
        tests: [],
      },
    ],
  },
  {
    id: "bothfull",
    label: "Both active + passive full",
    short: "Extra-capsular pain source",
    nextStep: "Proceed to impingement special tests \u2014 Hawkins-Kennedy to screen (most sensitive), painful arc to confirm (most specific). No single test is accurate alone.",
    flag: "teal",
    diagnoses: [
      {
        name: "Subacromial impingement / bursitis",
        tests: [
          { name: "Hawkins-Kennedy", how: "Hold the shoulder at 90\u00b0 forward flexion, then forcibly internally rotate it \u2014 compresses the supraspinatus under the coracoacromial ligament.", positive: "Pain.", value: "The single most sensitive impingement test \u2014 best for screening." },
          { name: "Neer's sign / test", how: "Arm internally rotated, then passively brought into forward flexion. (\u201cTest\u201d version = repeat after subacromial lidocaine.)", positive: "Anterior pain (sign). Pain abolished with lidocaine (test).", value: "Moderate sensitivity; lidocaine response confirms a subacromial source." },
          { name: "Painful arc sign", how: "Patient actively abducts the arm through the full range.", positive: "Pain specifically in the 60\u2013120\u00b0 arc only.", value: "High specificity \u2014 use to confirm once already suspected." },
          { name: "Yocum's test", how: "Hand on the opposite shoulder; elevate the elbow without shrugging, against resistance.", positive: "Pain.", value: "Less commonly performed, reasonably specific." },
        ],
      },
      {
        name: "AC joint arthritis",
        tests: [
          { name: "Cross-arm adduction", how: "90\u00b0 forward flexion, then adducted across the body, compressing the AC joint.", positive: "Pain over the AC joint.", value: "Stresses the superior AC capsule and disc." },
          { name: "Paxinos test", how: "Thumb on the posterior AC joint, fingers on the anterior clavicle, then squeeze.", positive: "Pain.", value: "Isolates the POSTERIOR AC capsule that the other two tests miss." },
          { name: "O'Brien's (AC variant)", how: "Same manoeuvre as the SLAP version \u2014 90\u00b0 flexion + adduction, thumb down then up.", positive: "Pain.", value: "Differentiate by location \u2014 AC pain is superficial/on top of the shoulder; SLAP pain is deep, inside the joint." },
        ],
      },
      {
        name: "Calcific tendinitis (acute)",
        note: "No reliable special test \u2014 diagnosis is clinical: sudden severe pain, minimal/no trauma, arm held protectively, can barely tolerate movement. Confirm with an X-ray showing the deposit.",
        tests: [],
      },
      {
        name: "Biceps tendinitis (usually secondary)",
        note: "Almost always secondary to another lesion (cuff tear, SLAP, subscap tear, impingement, or instability) \u2014 keep hunting for the primary cause if it doesn't settle.",
        tests: [
          { name: "Speed's test", how: "Elbow extended, forearm supinated, shoulder held at ~60\u00b0 forward flexion. Apply downward resistance.", positive: "Anterior shoulder pain.", value: "Stresses the long head of biceps / SLAP anchor." },
          { name: "Yergason's test", how: "Elbow flexed 90\u00b0, forearm pronated. Patient actively supinates + flexes the elbow against resistance.", positive: "Pain localised to the bicipital groove.", value: "Suggests biceps tendinitis specifically, as distinct from a SLAP-driven biceps problem." },
        ],
      },
    ],
  },
  {
    id: "iralone",
    label: "Only internal rotation restricted",
    short: "Isolated posterior capsule",
    nextStep: "Proceed to SLAP-specific special tests \u2014 O'Brien's as initial screen, Crank test to confirm. Positive on both + matching history \u2192 high pre-test probability, go to MRI arthrogram (plain MRI misses many SLAP tears).",
    flag: "teal",
    diagnoses: [
      {
        name: "SLAP tear",
        tests: [
          { name: "O'Brien's active compression", how: "90\u00b0 forward flexion + 10\u201315\u00b0 adduction, across the body. Thumb down \u2014 resist downward, note pain. Repeat thumb up.", positive: "Pain with thumb down, reduced/abolished with thumb up.", value: "Most sensitive SLAP test." },
          { name: "Crank test", how: "Supine or sitting. ~160\u00b0 forward flexion, axial load along the humerus, rotate both directions while loaded.", positive: "Palpable click with pain.", value: "Most specific SLAP test \u2014 best to confirm." },
          { name: "Biceps Load Test II", how: "Supine, 120\u00b0 abduction + full ER + 90\u00b0 elbow flexion. Resist supination.", positive: "Reproduction of pain.", value: "Stresses the biceps anchor directly." },
        ],
      },
      {
        name: "GIRD (posterior capsule contracture)",
        note: "Not a special test but a measurement \u2014 taken in the supine 90\u00b0-forward-flexion rotation position (see Examination technique above). IR deficit >25\u00b0 versus the contralateral, uninjured shoulder is clinically significant. Total rotational arc usually stays normal (ER gain offsets IR loss) \u2014 if the total arc itself is reduced, suspect generalised capsular contracture instead.",
        tests: [],
      },
      {
        name: "Anterior instability (via peel-back)",
        tests: [
          { name: "Jobe relocation test", how: "Apprehension test first (90\u00b0 abduction + full ER, the \u201ccocking\u201d position). Then apply a posteriorly-directed force on the humeral head.", positive: "Note what relocation relieves.", value: "Apprehension relieved \u2192 anterior instability. Pain (no true apprehension) relieved \u2192 SLAP / internal impingement." },
        ],
      },
      {
        name: "Biceps tendinitis (2\u00b0 to SLAP)",
        note: "Cross-referenced here because a torn biceps anchor pulls on the whole tendon \u2014 biceps groove tenderness with IR restriction points back to the SLAP pathway above rather than a primary biceps problem.",
        tests: [
          { name: "Speed's test", how: "Elbow extended, forearm supinated, shoulder held at ~60\u00b0 forward flexion. Apply downward resistance.", positive: "Anterior shoulder pain.", value: "Stresses the long head of biceps / SLAP anchor." },
          { name: "Yergason's test", how: "Elbow flexed 90\u00b0, forearm pronated. Patient actively supinates + flexes the elbow against resistance.", positive: "Pain localised to the bicipital groove.", value: "Suggests biceps tendinitis specifically, as distinct from a SLAP-driven biceps problem." },
        ],
      },
    ],
  },
];

const instabilityDiagnoses = [
  {
    name: "Anterior instability (Bankart spectrum)",
    tests: [
      { name: "Apprehension test", how: "90\u00b0 abduction, then passively externally rotate the arm (the \u201ccocking\u201d position).", positive: "Patient becomes apprehensive / guards \u2014 feels the shoulder is about to dislocate.", value: "Classic anterior instability sign." },
      { name: "Relocation test", how: "With apprehension provoked, apply a posteriorly-directed force on the humeral head.", positive: "Apprehension relieved.", value: "Confirms anterior instability (as opposed to SLAP \u2014 see Jobe relocation distinction)." },
      { name: "Anterior load-and-shift", how: "Humeral head loaded into the glenoid, then shifted anteriorly.", positive: "Excessive anterior translation compared to the other side.", value: "Grades the degree of anterior laxity." },
    ],
  },
  {
    name: "Posterior instability",
    tests: [
      { name: "Posterior apprehension", how: "90\u00b0 forward flexion + internal rotation, then apply a posteriorly-directed force.", positive: "Apprehension or pain.", value: "Posterior labral pathology, Kim lesion, PoLPSA." },
      { name: "Jerk test", how: "90\u00b0 abduction + internal rotation, axial load applied while adducting the arm.", positive: "Palpable clunk.", value: "Consider Batter's shoulder in the right context (lead arm of a batter/batsman)." },
    ],
  },
  {
    name: "Multidirectional instability (MDI)",
    tests: [
      { name: "Sulcus sign", how: "Downward traction on the adducted arm, performed in both neutral and external rotation.", positive: "A gap/sulcus appears below the acromion; remaining positive in ER is the key discriminator.", value: "Positive in ER specifically = pathological rotator interval laxity, the hallmark of MDI. Needs rotator interval plication, NOT a standard Bankart repair." },
    ],
  },
];

// ---------- DIAGNOSIS \u2192 MANAGEMENT MAP (the end-to-end payoff) ----------
// Keyed by exact diagnosis name used in romPatterns / instabilityDiagnoses.
const diagnosisManagementMap = {
  "Locked posterior dislocation": {
    education: "Explain plainly that this is a true dislocation the patient may not recognise as one \u2014 the ball has slipped backward and locked against the socket rim. It needs urgent same-day imaging (axillary view) and almost always a reduction procedure, not a routine physiotherapy referral. Reassure that outcomes are generally good when caught and reduced early, but worsen the longer it goes unrecognised.",
    pharma: "Adequate analgesia/sedation for the reduction itself \u2014 IV analgesia plus a short-acting sedative under monitoring, or general anaesthesia if reduction proves difficult or presentation is delayed. NSAIDs for post-reduction pain once the shoulder is stable.",
    rehab: "Sling immobilisation post-reduction, duration guided by stability on exam under anaesthesia (commonly 3\u20136 weeks), then gradual passive-to-active ROM. If a McLaughlin procedure was done for the reverse Hill-Sachs defect, follow the operating surgeon's specific protocol rather than a generic timeline \u2014 the subscapularis transfer needs its own protection window.",
    injection: "Not applicable in the acute pre-reduction setting.",
    surgery: "Duration since injury drives the decision: under 3 weeks \u2014 closed reduction under GA usually suffices. 3\u20136 weeks \u2014 often needs open reduction, since early fibrosis and bony change have already started. Over 6 weeks (chronic, locked) \u2014 McLaughlin procedure (subscapularis \u00b1 lesser tuberosity transferred into the defect) for a moderate reverse Hill-Sachs lesion, bone grafting for a larger defect, or reverse shoulder arthroplasty if the joint surface is already destroyed.",
  },
  "Adhesive capsulitis (frozen shoulder)": {
    education: "Walk the patient through all three phases up front \u2014 freezing (painful), frozen (stiff), thawing (recovering) \u2014 and be honest the full course commonly runs 12\u201324 months. Daily consistency with stretching matters more than intensity.",
    pharma: "NSAIDs for background pain during the painful phase.",
    rehab: "Irritability-matched stretching programme \u2014 full detail (Codman pendulum vs aggressive ER/sleeper/cross-body/towel stretches by irritability level) is in Rehab \u2192 Adhesive capsulitis.",
    injection: "Intra-articular Kenacort (high irritability) or hydrodistension (low irritability) \u2014 recipes and technique in Injections.",
    surgery: "MUA or arthroscopic capsular release if refractory after 4\u20136 months \u2014 full pathway with decision points in Management protocols \u2192 Adhesive capsulitis.",
  },
  "Glenohumeral arthritis": {
    education: "Frame this as wear-and-tear of the ball-and-socket joint surfaces themselves, distinct from a tendon or muscle problem. Reassure that pain is often genuinely manageable without surgery for years, and that replacement is kept in reserve for when conservative measures stop working, not offered reflexively.",
    pharma: "NSAIDs first-line; paracetamol as an adjunct or alternative in NSAID-intolerant patients. A glucosamine/chondroitin trial is reasonable if the patient wants to try it, though the evidence for it is mixed.",
    rehab: "Physiotherapy focused on maintaining range of motion and periscapular/cuff strength \u2014 doesn't reverse the arthritis, but preserves day-to-day function and can meaningfully delay the point at which surgery becomes necessary.",
    injection: "Intra-articular corticosteroid for symptomatic flares \u2014 effective but time-limited; space injections out (max 3/joint/year, minimum 6-week gap \u2014 see Injections).",
    surgery: "Total shoulder arthroplasty (TSA) once conservative measures genuinely fail. Pre-op CT for Walch glenoid classification is essential \u2014 A-type glenoids are usually straightforward, while B2/B3/C patterns need corrective reaming or augmented components to address retroversion and avoid early component loosening (see Classifications).",
  },
  "Cuff tear arthropathy": {
    education: "Explain this as end-stage damage from a long-standing, untreated massive cuff tear \u2014 the joint surfaces have reshaped themselves over years of abnormal loading. A reverse shoulder replacement, not a standard one, is usually the right operation, and reassure that outcomes for pain relief and function are generally very good with RSA specifically for this condition.",
    pharma: "NSAIDs for symptomatic control while a surgical decision is worked through \u2014 this does not slow the underlying joint destruction.",
    rehab: "Pre-operative deltoid-strengthening physiotherapy where tolerated, since the deltoid becomes the primary elevator after RSA. Post-operative protocol is implant-specific, set by the operating surgeon.",
    injection: "Can give temporary symptomatic relief but doesn't change the surgical trajectory once pseudoparalysis and positive lag signs are established.",
    surgery: "Reverse shoulder arthroplasty (RSA) is the standard of care here \u2014 a conventional TSA will fail without an intact cuff to stabilise it. Check contraindications first: active infection, deltoid paralysis, severe glenoid bone loss precluding stable fixation, and axillary nerve palsy.",
  },
  "Supraspinatus tear": {
    education: "Explain the partial vs full-thickness distinction plainly \u2014 partial tears are often manageable without surgery, while a full-thickness tear, especially an acute one from a clear injury, is more likely to need repair and benefits from not being delayed.",
    pharma: "NSAIDs for pain control during a conservative trial or while awaiting surgery.",
    rehab: "If managed conservatively: scapular stabilisation (serratus anterior, lower trapezius) plus gentle cuff strengthening, avoiding painful overhead loading. If repaired: the structured post-op protocol \u2014 sling, then passive ROM, then active ROM, then resisted strengthening (see Rehab) \u2014 rather than a generic timeline.",
    injection: "A subacromial steroid trial is reasonable if pain is the dominant symptom and strength is largely preserved \u2014 not appropriate once a structural tear with significant weakness is confirmed, since it delays a needed surgical decision without treating the tear itself.",
    surgery: "Acute traumatic tear with a positive lag sign in an active patient: the literature consistently favours earlier repair, with the best outcomes generally reported when repair happens within about 3 weeks of injury; some series show acceptable results up to 3\u20134 months, and optimal timing genuinely remains debated \u2014 the practical message is not to let \u201cthe window has closed\u201d thinking delay a referral. Chronic/degenerative tear that is pain-predominant with preserved function: a conservative trial first is reasonable.",
  },
  "Infraspinatus tear": {
    education: "Explain that involvement of this tendon \u2014 especially alongside supraspinatus \u2014 represents a larger posterior cuff tear with a different, generally more guarded prognosis than an isolated supraspinatus tear.",
    pharma: "NSAIDs.",
    rehab: "External rotator strengthening (side-lying ER, resisted-band ER) if managed conservatively; the post-op protocol mirrors supraspinatus repair timelines if surgically repaired.",
    injection: "Subacromial steroid trial reasonable if pain-predominant with strength reasonably preserved.",
    surgery: "Same urgency logic as supraspinatus \u2014 an acute complete tear with a positive lag sign favours earlier referral for repair; a chronic degenerative pattern can reasonably be trialled conservatively first.",
  },
  "Teres minor tear": {
    education: "A positive Hornblower's sign changes the conversation meaningfully \u2014 explain honestly that a standard repair is unlikely to succeed here, and that a reverse replacement is the more probable eventual path, so referral shouldn't be delayed by repeated conservative trials once this is confirmed.",
    pharma: "NSAIDs, symptomatic control.",
    rehab: "General shoulder care pending specialist review \u2014 aggressive attempts at cuff-specific strengthening have limited value once this pattern is confirmed.",
    injection: "Symptomatic relief only.",
    surgery: "Refer for reverse shoulder arthroplasty evaluation once Hornblower's is confirmed positive on exam and correlates with imaging \u2014 standard repair is not typically offered for this pattern.",
  },
  "Subscapularis tear": {
    education: "Explain which fibre group is involved based on the three-test battery \u2014 upper-fibre tears are both the most common and the most frequently missed pattern, worth mentioning specifically if an earlier scan was reported as normal.",
    pharma: "NSAIDs.",
    rehab: "If managed conservatively: internal rotation strengthening, avoiding provocative behind-the-back loading. If repaired: avoid active internal rotation loading and passive external rotation beyond the surgeon's stated limit for the first 6 weeks \u2014 early stress on this specific repair carries a real failure risk.",
    injection: "Subacromial or intra-articular trial reasonable if pain-predominant with preserved strength.",
    surgery: "Repair indicated for a confirmed complete tear, particularly when the biceps groove is empty on imaging \u2014 that finding suggests the medial pulley has failed alongside the subscapularis itself.",
  },
  "Deltoid / suprascapular nerve palsy": {
    education: "Explain this is a nerve problem, not a tendon tear \u2014 recovery follows a different, often slower timeline, and the workup (EMG/nerve conduction studies) looks different from a standard shoulder MRI pathway.",
    pharma: "Neuropathic pain agents (e.g. gabapentin or pregabalin) if there's a significant burning/dysaesthetic component; simple analgesia otherwise.",
    rehab: "Nerve-specific physiotherapy \u2014 maintaining passive ROM to prevent stiffness while awaiting reinnervation; functional electrical stimulation is sometimes used adjunctively.",
    injection: "Not first-line for a nerve lesion itself.",
    surgery: "Reserved for confirmed structural nerve compression/entrapment on EMG after specialist nerve referral \u2014 most post-traumatic palsies are observed for spontaneous recovery over 3\u20136 months before surgery is even discussed.",
  },
  "Subacromial impingement / bursitis": {
    education: "Explain the scapular force-couple concept in plain terms \u2014 upper trapezius overworking, lower trapezius/serratus underworking \u2014 and that rehab targets fixing that balance, not just the painful spot.",
    pharma: "Tab Etoricoxib 60mg OD + Pantoprazole 40mg for gastric cover, for a defined trial period.",
    rehab: "Serratus anterior + lower trapezius strengthening, deliberately NOT strengthening upper trapezius \u2014 full exercise Rx (Wall Push-Up Plus, Serratus Punch, Dynamic Hug, Y-exercise) in Rehab \u2192 External impingement.",
    injection: "Subacromial Kenacort if not settling by 6\u20138 weeks \u2014 long-needle technique in Injections.",
    surgery: "Only after a genuine 6-month conservative trial fails \u2014 ~80% avoid this step. Full pathway in Management protocols \u2192 Impingement.",
  },
  "AC joint arthritis": {
    education: "Explain this is wear at the small joint on top of the shoulder (collarbone meets shoulder blade), distinct from the ball-and-socket joint. NOTE: this is the degenerative/arthritic pattern \u2014 for a traumatic AC separation, see Classifications \u2192 Rockwood and Management protocols \u2192 AC joint injury instead.",
    pharma: "NSAIDs.",
    rehab: "General shoulder ROM/strength maintenance; avoid provocative cross-body loading during flares.",
    injection: "Direct AC joint injection \u2014 Depomedrol 20mg or Kenacort 20mg, small volume; accurate palpation is essential (see Injections).",
    surgery: "Distal clavicle excision if refractory to injection + activity modification over a reasonable trial.",
  },
  "Calcific tendinitis (acute)": {
    education: "Reassure clearly \u2014 among the most acutely painful shoulder conditions, but also one of the most reliably self-resolving.",
    pharma: "NSAIDs, adequate analgesia during the flare.",
    rehab: "Sling rest and gentle pendulum only \u2014 explicitly AVOID aggressive physiotherapy in this phase, it worsens symptoms.",
    injection: "Subacromial Kenacort + barbotage if creamy consistency on USG \u2014 full technique and the expected 24\u201348h flare in Injections \u2192 Barbotage.",
    surgery: "Arthroscopic removal only if refractory to conservative care + ESWT (hard, formative-phase deposits) \u2014 full staged pathway in Management protocols \u2192 Calcific tendinitis.",
  },
  "Biceps tendinitis (usually secondary)": {
    education: "Explain clearly and early that biceps pain is almost always downstream of another lesion \u2014 treating the biceps in isolation, without finding and addressing the primary cause (cuff tear, SLAP, subscapularis tear, impingement, instability), usually disappoints.",
    pharma: "NSAIDs.",
    rehab: "Rehab targets the primary lesion identified on exam \u2014 biceps symptoms typically resolve once that's addressed, rather than needing a biceps-specific programme of their own.",
    injection: "A biceps sheath or subacromial injection can help symptomatically, but won't substitute for treating the underlying cause \u2014 if relief doesn't hold, that failure is itself a cue to re-examine for a missed primary lesion.",
    surgery: "Tenotomy vs tenodesis considered for isolated or refractory biceps pathology, or alongside surgery for the primary lesion. Age and functional demand decide: tenotomy for lower-demand patients over roughly 60 not concerned about cosmesis; tenodesis (subpectoral generally preferred) for active patients 35\u201360 wanting to preserve supination strength and avoid Popeye deformity \u2014 with a strict no-resisted-supination rule for 6 weeks post-tenodesis, since everyday activities like a jar lid or screwdriver are the most common cause of early failure.",
  },
  "Biceps tendinitis (2\u00b0 to SLAP)": {
    education: "Same principle as above, made specific \u2014 this is a consequence of the SLAP lesion pulling on the biceps anchor, not an independent problem, and counselling should reflect that.",
    pharma: "NSAIDs during the initial activity-modification phase.",
    rehab: "Follows the staged SLAP/DTS rehab programme rather than a separate biceps-specific protocol.",
    injection: "Intra-articular \u2014 never subacromial \u2014 if SLAP is the confirmed source; a subacromial injection here is a documented space error that won't help.",
    surgery: "Addressed at the time of SLAP surgery \u2014 tenodesis is often favoured over isolated SLAP repair once the patient is past their mid-30s, given more reliable outcomes at that age.",
  },
  "SLAP tear": {
    education: "Plain MRI can miss a genuine SLAP tear \u2014 if the clinical picture (positive O'Brien's + Crank test, matching history) is convincing, don't fully rule it out on a \u201cnormal\u201d plain MRI; arthrogram is more sensitive.",
    pharma: "Tab Etoricoxib 60mg + Pantoprazole 40mg during the initial activity-modification phase.",
    rehab: "Staged DTS rehab if a throwing athlete (Sleeper Stretch is the centrepiece) \u2014 full staged programme in Rehab \u2192 SLAP/DTS. Standard scapular + cuff strengthening if not a thrower.",
    injection: "Intra-articular \u2014 NEVER subacromial for this diagnosis, a documented space error (see Injections \u2192 Condition\u2192space table).",
    surgery: "Failed structured conservative trial (~3 months in throwers): arthroscopic repair vs tenodesis, tenodesis generally preferred past ~35\u201340. Full pathway in Management protocols \u2192 SLAP tear.",
  },
  "GIRD (posterior capsule contracture)": {
    education: "Reassure this is a flexibility deficit from posterior capsule tightness, not structural damage \u2014 genuinely very treatable with consistent stretching.",
    pharma: "Not typically needed.",
    rehab: "Sleeper stretch is the primary and most important intervention \u2014 consistent daily stretching of the posterior capsule, with the IR deficit reassessed periodically against the contralateral side to track progress.",
    injection: "Not indicated for isolated GIRD.",
    surgery: "Not typically needed for GIRD alone \u2014 if it isn't responding as expected to a structured stretching programme, reassess for an underlying SLAP tear rather than simply assuming the stretching needs more time.",
  },
  "Anterior instability (via peel-back)": {
    education: "Distinguish this SLAP-driven mechanism from a frank dislocating shoulder for the patient \u2014 a genuinely different problem with a different fix, even though \u201cinstability\u201d is mentioned in both.",
    pharma: "NSAIDs.",
    rehab: "Posterior capsular stretching (Sleeper Stretch) plus the staged DTS rehab programme.",
    injection: "Not first-line here.",
    surgery: "Addressed as part of SLAP repair if conservative care fails, rather than as a standalone stabilisation procedure.",
  },
  "Anterior instability (Bankart spectrum)": {
    education: "Discuss recurrence risk honestly and specific to the patient's age and activity level \u2014 recurrence after a first traumatic dislocation is very high in young, athletic patients, which is why early stabilisation is increasingly offered rather than waiting for a second or third episode.",
    pharma: "Analgesia around the dislocation/reduction episode itself; NSAIDs for background discomfort during rehab.",
    rehab: "Brief sling immobilisation post-reduction (optimal duration and position are genuinely debated in the literature), then structured rehab avoiding the abduction + external rotation \u201cat-risk\u201d position for the first several weeks, progressing to scapular stabilisation and dynamic stability work.",
    injection: "Not applicable to the instability itself.",
    surgery: "CT to quantify glenoid bone loss % and Hill-Sachs on-track/off-track status, then apply the instability decision matrix: arthroscopic Bankart repair alone for non-significant bone loss with an on-track lesion; add Remplissage if off-track; Latarjet if bone loss is significant (>20\u201325%), with Remplissage added if the Hill-Sachs remains off-track even after the coracoid graft restores the glenoid arc (bipolar bone loss) \u2014 see Conditions for the full matrix.",
  },
  "Posterior instability": {
    education: "Explain the different mechanism from anterior instability, and where relevant, the sporting context (e.g. batting, throwing) driving the repetitive posterior load.",
    pharma: "NSAIDs/analgesia as needed.",
    rehab: "Posterior capsular and rotator cuff strengthening, activity/technique modification \u2014 a structured trial of at least 3\u20136 months before surgery is considered.",
    injection: "Not first-line.",
    surgery: "Arthroscopic posterior labral repair (addressing a Kim lesion or PoLPSA specifically) with posterior capsular plication if conservative care fails, with an expected return to sport around 6\u20139 months.",
  },
  "Multidirectional instability (MDI)": {
    education: "Explain this is laxity across multiple directions rather than a single traumatic tear \u2014 a genuinely different conversation from a Bankart-type injury, with surgery very much a last resort.",
    pharma: "NSAIDs as needed.",
    rehab: "Extended, structured physiotherapy \u2014 rotator cuff, scapular stabilisers, and capsular strengthening \u2014 for a minimum of 6 months before surgery is even considered. This is the single most important part of MDI management, more so than for any other instability pattern.",
    injection: "Not first-line.",
    surgery: "Rotator interval plication if surgery is eventually needed \u2014 explicitly NOT a standard Bankart repair, since the underlying problem (a patulous rotator interval) is mechanically different.",
  },
};


function computeRedFlag(state) {
  if (state.malignancy) {
    return { flag: "red", title: "Red flag \u2014 rule out malignancy", body: "Pain disproportionate to findings or unremitting at rest, with a cancer history, should prompt consideration of metastasis to the proximal humerus. Investigate before treating as routine mechanical pain." };
  }
  if (state.suddenacute) {
    return { flag: "red", title: "Suspect calcific tendinitis \u2014 resorptive phase", body: "Sudden severe non-traumatic pain, arm held protectively, occasional low-grade fever \u2014 get an X-ray first to visualise the deposit. Do NOT start aggressive physiotherapy in this phase, it worsens symptoms. Management: subacromial steroid injection, NSAIDs, sling rest, and barbotage if the deposit has a creamy consistency on ultrasound." };
  }
  return null;
}

// ---------- REHAB DATA (from course handbook) ----------
const phaseSurgeries = {
  cuff_small: {
    name: "Rotator cuff repair \u2014 small/medium tear",
    maxWeek: 26,
    evidenceNote: "Genuinely debated in the literature: pooled RCT data show early passive motion gains ~5\u201315\u00b0 more forward flexion at 3 months with NO significant difference in re-tear rate overall \u2014 but this pools all tear sizes together, and some analyses suggest large/massive tears specifically may tolerate early motion less well. This protocol takes a moderate early-passive-motion approach appropriate for a small/medium tear; the case for it is weaker in large tears (see the large/massive tear protocol, which is intentionally more conservative).",
    phases: [
      { from: 0, to: 6, title: "Phase 1 \u2014 Protection", points: [
        "Sling at all times except hygiene / prescribed exercise",
        "Passive ROM only, started day 1\u20137 per surgeon preference \u2014 pendulum (Codman) swings, table slides, wand-assisted forward flexion/ER performed BY the therapist or the unaffected arm, never actively by the operated side",
        "No active abduction / flexion, no IR behind the back",
        "No weight bearing through the operated arm",
        "Cryotherapy for pain and swelling",
      ]},
      { from: 6, to: 10, title: "Phase 2 \u2014 Sling wean, AAROM", points: [
        "Gradually wean sling per surgeon clearance",
        "Progress passive \u2192 active-assisted ROM \u2014 supine AAROM with a wand/pulley, progressing to standing",
        "Begin scapular stabilisation: Scapular Retraction (Squeeze), Prone Scapular \u201cI\u201d, isometric Serratus Punch (sub-maximal, pain-free only)",
        "Still no resisted strengthening of the cuff itself",
      ]},
      { from: 10, to: 16, title: "Phase 3 \u2014 Active ROM, light resistance", points: [
        "Progress to full active ROM by ~14\u201318 weeks",
        "Begin resisted exercise after week 12 \u2014 side-lying ER with light dumbbell, resisted-band IR/ER at the side, Prone \u201cT\u201d and \u201cY\u201d for mid/lower trapezius",
        "10\u201315 reps, 3 sessions/week, strictly pain-free range only \u2014 use the pain-monitoring model (see Rehab Principles)",
      ]},
      { from: 16, to: 26, title: "Phase 4 \u2014 Advanced strengthening", points: [
        "Progressive resisted strengthening \u2014 all 4 cuff muscles + scapular stabilisers, advancing band resistance/light free weights",
        "No overhead lifting >10 lbs until cleared",
        "Sport / activity-specific return, avoid painful end-range loaded positions",
      ]},
    ],
  },
  cuff_large: {
    name: "Rotator cuff repair \u2014 large/massive tear",
    maxWeek: 28,
    evidenceNote: "More conservative by design \u2014 large/massive tears have a real biological handicap (poorer blood supply, higher baseline re-tear risk regardless of rehab speed), and several meta-analyses suggest the healing-rate cost of early aggressive motion is more apparent once large tears are analysed separately from small/medium ones. Err conservative here even though the small/medium protocol's early-motion approach is reasonable for its population.",
    phases: [
      { from: 0, to: 8, title: "Phase 1 \u2014 Extended protection", points: [
        "Sling at all times \u2014 extended immobilisation (larger tear = slower biology, higher-stakes re-tear risk)",
        "Passive ROM only, conservative range \u2014 pendulum swings and table slides only for the first 2\u20133 weeks, wand-assisted PROM introduced cautiously after",
        "No active motion, no weight bearing",
      ]},
      { from: 8, to: 12, title: "Phase 2 \u2014 Gradual sling wean", points: [
        "Begin weaning sling per surgeon clearance",
        "AAROM introduced cautiously \u2014 supine wand-assisted flexion/ER",
        "Scapular control: isometric Scapular Retraction, sub-maximal Serratus Punch \u2014 nothing resisted through the cuff yet",
      ]},
      { from: 12, to: 16, title: "Phase 3 \u2014 Active ROM", points: [
        "Progress AAROM \u2192 AROM",
        "Still no resisted strengthening",
      ]},
      { from: 16, to: 28, title: "Phase 4 \u2014 Delayed strengthening", points: [
        "Resisted exercise starts later than the small/medium protocol, ~week 16+ \u2014 same exercise vocabulary (side-lying ER, resisted-band IR/ER, Prone T/Y) but slower load progression",
        "Progress slowly, monitor for re-tear signs (sudden strength loss, new pain, palpable defect)",
        "Advanced strengthening only once ROM and pain control are genuinely solid",
      ]},
    ],
  },
  bankart: {
    name: "Post-Bankart stabilisation",
    maxWeek: 26,
    phases: [
      { from: 0, to: 3, title: "Phase 1 \u2014 Immobilisation", points: [
        "Sling continuously; gentle pendulum only",
        "Active hand/wrist/elbow ROM encouraged to prevent distal stiffness",
        "NO external rotation whatsoever \u2014 strict, non-negotiable",
        "Premature ER is a recognised direct cause of repair failure",
      ]},
      { from: 3, to: 6, title: "Phase 2 \u2014 Range of motion", points: [
        "Sling discontinued gradually",
        "Passive then active-assisted ROM, forward flexion first",
        "ER limited to 0\u201330\u00b0 only",
        "No behind-the-back movement, no ABER \u201cat-risk\u201d position yet",
      ]},
      { from: 6, to: 12, title: "Phase 3 \u2014 Scapular phase", points: [
        "Full passive ROM should now be achievable",
        "Serratus anterior, lower + middle trapezius strengthening begins \u2014 Wall Push-Up Plus, Prone \u201cY\u201d and \u201cT\u201d, Scapular Retraction with band",
        "Proprioceptive exercises \u2014 rhythmic stabilisation drills, closed-chain weight-shifting on a stable surface",
        "Contact sport still off-limits",
      ]},
      { from: 12, to: 24, title: "Phase 4 \u2014 Strengthening", points: [
        "Full ROM should be present",
        "Progressive strengthening of all 4 cuff muscles \u2014 side-lying ER, resisted-band IR/ER, Jobe's-position raises within pain-free range",
        "Dynamic stability work \u2014 rhythmic stabilisation progressing to plyometric catch-and-throw drills for athletes",
        "Contact sport still avoided",
      ]},
      { from: 24, to: 26, title: "Phase 5 \u2014 Return to sport", points: [
        "Non-contact \u2192 contact \u2192 full competitive return",
        "Throwers need longer \u2014 full return typically 9\u201312 months",
      ]},
    ],
  },
  slap_dts: {
    name: "SLAP / disabled throwing shoulder",
    maxWeek: 24,
    phases: [
      { from: 0, to: 4, title: "Phase 1", points: [
        "Overhead throwing specifically suspended",
        "Tab Etoricoxib 60mg + Pantoprazole 40mg for symptom control",
        "Posterior capsular stretching begins \u2014 Sleeper Stretch is the centrepiece, most important step in this phase",
      ]},
      { from: 4, to: 8, title: "Phase 2", points: [
        "Continue posterior capsular stretching",
        "Rotator cuff strengthening begins \u2014 emphasis on external rotators",
        "Scapular stabilisation introduced",
        "Overhead activity still restricted",
      ]},
      { from: 8, to: 12, title: "Phase 3", points: [
        "Overhead activity reintroduced, graded and progressive",
        "Sport-specific training, structured interval throwing program",
      ]},
      { from: 12, to: 24, title: "Phase 4 (months 3\u20136)", points: [
        "Full return to sport targeted",
        "Symptoms not resolved by now \u2192 MRI arthrogram + move toward surgical decision rather than extending conservative care indefinitely",
      ]},
    ],
  },
  arthroplasty: {
    name: "Shoulder arthroplasty (TSA / RSA)",
    maxWeek: 24,
    evidenceNote: "A 2019 JOSPT systematic review found high heterogeneity across published TSA/RSA rehab protocols and rated the evidence low quality (mostly expert opinion, few RCTs) \u2014 sling duration alone ranged from \u201ccomfort only\u201d to 6 full weeks across different published protocols. Treat the week numbers below as a reasonable, evidence-informed framework, not a rigid standard \u2014 always confirm the individual surgeon's specific precautions, especially for RSA.",
    phases: [
      { from: 0, to: 6, title: "Phase 1 \u2014 Protection", points: [
        "Sling continuously except exercise/hygiene",
        "Pendulum (Codman) swings + passive ROM only \u2014 table slides, wand-assisted PROM \u2014 no active lifting",
        "RSA: avoid the combined extension + internal rotation + adduction position \u2014 the classic dislocation mechanism. Keep elevation in scaption (scapular plane), not pure coronal abduction",
        "TSA: avoid extremes of external rotation specifically \u2014 protects the subscapularis repair",
        "Deltoid isometrics (sub-maximal, pain-free) started early for RSA \u2014 the deltoid becomes the primary mover post-RSA",
      ]},
      { from: 6, to: 12, title: "Phase 2 \u2014 Sling wean, AAROM", points: [
        "Wean sling per surgeon clearance",
        "Progress PROM \u2192 AAROM \u2014 supine wand-assisted flexion, pulley-assisted elevation",
        "RSA: continue avoiding extension+IR+adduction through week 12. No resisted IR until 12 weeks",
        "TSA: begin gentle AROM, keep avoiding forced/end-range ER",
        "No supporting body weight through the operated arm (e.g. pushing up from a chair) through this phase",
      ]},
      { from: 12, to: 24, title: "Phase 3 \u2014 Progressive strengthening", points: [
        "Progress toward full AROM, begin progressive resistance \u2014 resisted-band scaption raises, side-lying ER, seated rows for scapular retraction",
        "RSA: several published protocols keep a LIFETIME restriction on axial loading through an extended arm (e.g. pushing up from a chair) \u2014 worth flagging as an ongoing precaution, not just an early one",
        "Long-term load limits in some protocols: ~15lb below shoulder height, ~10lb above \u2014 confirm the individual surgeon's limits",
        "Functional/activity-specific training as strength allows",
      ]},
    ],
  },
  mua_release: {
    name: "Post-MUA / capsular release (frozen shoulder)",
    maxWeek: 12,
    phases: [
      { from: 0, to: 2, title: "Phase 1 \u2014 Aggressive early motion", points: [
        "PROM starts the SAME day or day after the procedure \u2014 unlike most post-op protocols, early aggressive motion is the entire point here, to hold the range gained under anaesthesia before it's lost",
        "Multiple sessions per day, not once-daily",
        "Adequate pain control (regional block/NSAIDs) specifically to permit this early aggressive motion",
      ]},
      { from: 2, to: 6, title: "Phase 2 \u2014 Progress to active motion", points: [
        "Progress PROM \u2192 AAROM \u2192 AROM",
        "Daily home stretching is essential \u2014 gains regress quickly within days if stretching is skipped, unlike a typical healing-tissue timeline",
      ]},
      { from: 6, to: 12, title: "Phase 3 \u2014 Strengthening", points: [
        "Begin strengthening as ROM normalises",
        "Address any residual scapular dyskinesis that developed during the stiff period",
      ]},
    ],
  },
};

const rehabPrinciples = [
  { title: "Time-based vs criterion-based progression", body: "Tissue-healing constraints impose genuine time floors after repair/reconstruction (e.g. no ER before week 3 post-Bankart, no resisted IR before week 12 post-RSA) \u2014 these aren't negotiable regardless of how well the patient feels. But WITHIN a phase, strength and functional progression should be criterion-based \u2014 symmetrical ROM, pain-free resisted testing, adequate scapular control \u2014 not simply \u201cit's been 3 weeks so move on.\u201d Published shoulder arthroplasty protocols in particular show high heterogeneity in the literature, largely expert-opinion-based rather than RCT-driven \u2014 treat published week numbers as a reasonable framework to adapt, not gospel." },
  { title: "Pain-monitoring model", body: "Adapted from tendinopathy rehab literature: pain during or shortly after an exercise up to roughly 3\u20134/10 (on a 0\u201310 scale) is acceptable IF it settles back to baseline by the next morning and isn't progressively worsening session to session. Pain exceeding that threshold, or that lingers/worsens day to day, is a signal to regress the load \u2014 not push through it." },
  { title: "Load management", body: "Avoid sudden spikes in exercise volume or intensity between sessions \u2014 gradual, planned increments reduce flare-ups and re-injury risk far more reliably than an enthusiastic patient's own instinct to \u201ctest it out.\u201d" },
  { title: "Consistency beats intensity", body: "Especially true for capsular conditions (adhesive capsulitis, post-MUA) \u2014 daily gentle stretching outperforms occasional aggressive sessions, both for range gained and for pain control." },
];

const impingementRx = {
  meds: "Tab Etoricoxib 60mg OD + Tab Pantoprazole 40mg before food for gastric cover.",
  avoid: "TENS, ultrasound, IFT, laser \u2014 essentially zero evidence in this condition. Do not prescribe; wastes the patient's time and money.",
  dontStrengthen: "Upper trapezius \u2014 it's already overactive, compensating for weak serratus anterior/lower trap, and worsens the impingement pattern. Goal is to INHIBIT it, not strengthen it.",
  groups: [
    { muscle: "Serratus anterior (highest priority)", exercises: "Wall Push-Up Plus (deliberate extra protraction at the top), Serratus Punch (supine, punch fist toward ceiling), Dynamic Hug (resistance band)." },
    { muscle: "Lower trapezius", exercises: "\u201cY\u201d exercise (prone, arm at 120\u2013135\u00b0), prone extension, wall slides with deliberate upward rotation." },
    { muscle: "Middle trapezius", exercises: "Prone row with emphasis on scapular retraction at end range." },
    { muscle: "External rotators", exercises: "Side-lying ER, ER with band (elbow at side), \u201c90-90\u201d ER for throwing athletes." },
  ],
  timeline: "Minimum 6 months of structured conservative management \u2014 exercise program, activity modification, up to 2\u20133 subacromial injections spaced appropriately \u2014 before surgery is considered. ~80% improve enough to avoid surgery.",
};

const frozenShoulderLevels = {
  high: {
    label: "HIGH irritability",
    def: "Pain even at rest, severe night pain, VAS 7\u201310, provoked by minimal activity.",
    injection: "Intra-articular Kenacort 40mg \u2014 the pain-dominant \u201cfreezing\u201d phase. PT begins the day after injection to use the steroid's window of effect.",
    pt: "Reduce irritability FIRST. Gentle Codman pendulum only \u2014 no aggressive stretching, it will only provoke pain without useful range gains.",
  },
  medium: {
    label: "MEDIUM irritability",
    def: "Pain provoked by moderate activity, some residual pain at rest.",
    injection: "As clinically indicated.",
    pt: "Gentle passive ROM work; Maitland Grade I\u2013II oscillatory mobilisation, aimed at pain reduction over aggressive range gains.",
  },
  low: {
    label: "LOW irritability",
    def: "Pain only at end of available range, none at rest \u2014 picture dominated by stiffness.",
    injection: "Hydrodistension \u2014 the stiffness-dominant \u201cfrozen\u201d phase. 20ml saline + Kenacort 40mg + lignocaine 2%, under ultrasound guidance.",
    pt: "Now appropriate for aggressive PASSIVE stretching + Maitland Grade III\u2013IV. The external rotation stretch is the single most important exercise here.",
  },
};

const frozenStretches = [
  { name: "Supine passive external rotation", how: "Unaffected hand gently ER's the affected arm, patient consciously relaxes shoulder muscles. 30s hold \u00d7 3 sets.", priority: "HIGHEST \u2014 ER is lost earliest and stays most stubbornly restricted throughout." },
  { name: "Supine passive forward flexion", how: "Unaffected arm lifts affected arm overhead, gravity assists at end range.", priority: "High \u2014 pair with the ER stretch." },
  { name: "Codman pendulum", how: "Lean forward, let arm hang freely, small circular + forward-back movements. 2\u20133 min, 3\u00d7/day.", priority: "Safe at ALL phases, including high irritability \u2014 gravity-assisted, essentially pain-free." },
  { name: "Sleeper stretch", how: "Lying on affected side, shoulder + elbow at 90\u00b0, opposite hand pushes forearm toward the bed.", priority: "High, once past the highest-irritability stage \u2014 targets posterior capsule." },
  { name: "Towel stretch (IR)", how: "Towel behind the back, unaffected hand pulls upward to drag the affected hand higher.", priority: "Moderate \u2014 progress gradually day by day." },
];

// ---------- CONDITIONS DATA (from course handbook) ----------
const bankartVariants = [
  { name: "Bankart", note: "Periosteum torn, labrum displaced \u2014 classic, readily visible.", mgmt: "Arthroscopic Bankart repair." },
  { name: "Perthes", note: "Periosteum intact, labrum stays in place \u2014 MOST MISSED. Looks normal on MRI and even on visual inspection at arthroscopy.", mgmt: "Always probe the anterior labrum \u2014 if it lifts under gentle probing despite looking attached, that confirms it. Then repair." },
  { name: "ALPSA", note: "Periosteum intact, labrum medially displaced \u2014 can heal in a malpositioned location.", mgmt: "Dissect medially to subscapularis fibers, fully mobilise, repair anatomically \u2014 not wherever it's found." },
  { name: "PoLPSA", note: "Posterior-sided equivalent of ALPSA.", mgmt: "Same principle, posteriorly. Associated with posterior instability." },
  { name: "Bony Bankart", note: "Displaced, with an attached glenoid bone fragment.", mgmt: "CT for bone-loss quantification. Latarjet if bone loss >~25%." },
  { name: "HAGL", note: "Humeral-sided avulsion (not glenoid). J-sign disrupted on coronal MRI \u2014 frequent cause of an unexplained failed Bankart repair.", mgmt: "Usually requires open repair." },
  { name: "Buford complex", note: "NORMAL VARIANT (1.5\u20132% of people) \u2014 congenitally absent anterosuperior labrum + thick cord-like MGHL. Can look like pathology to the unwary.", mgmt: "NOTHING. Repairing it restricts ER and causes a stiff, painful shoulder \u2014 document and leave alone." },
];

const massiveTearDefs = [
  { name: "Size-based (Cofield)", detail: "Tear >5cm in any single dimension. Quick OPD/report communication." },
  { name: "Tendon-based (Gerber)", detail: "Complete tearing of \u22652 cuff tendons (commonly supraspinatus + infraspinatus, or + subscapularis). Directly guides surgical planning." },
  { name: "Retraction-based (Patte)", detail: "Staged 1\u20133. Stage 3 = stump retracted to the glenoid face \u2014 worst outlook for successful primary repair." },
];

const ahiTable = [
  { range: "7\u201314mm", meaning: "Normal \u2014 cuff structurally intact, just inflamed/compressed. Conservative management reasonable." },
  { range: "<7mm", meaning: "Significant rotator cuff tear \u2014 humeral head depressor function lost." },
  { range: "<5mm", meaning: "Massive tear, or established cuff tear arthropathy." },
  { range: "Sourcil sign present", meaning: "Sclerotic \u201ceyebrow\u201d on acromial undersurface \u2014 chronic massive tear. Go straight to MRI + surgical planning." },
];

const instabilityMatrix = [
  { boneLoss: "Non-significant (<20\u201325%)", track: "On-track", proc: "Arthroscopic Bankart Repair (ABR) alone." },
  { boneLoss: "Non-significant (<20\u201325%)", track: "Off-track", proc: "ABR + Remplissage (Hill-Sachs filled with infraspinatus + posterior capsule)." },
  { boneLoss: "Significant (>20\u201325%)", track: "On-track", proc: "Latarjet \u2014 required regardless of tracking; glenoid deficiency alone needs bone block." },
  { boneLoss: "Significant (>20\u201325%)", track: "Off-track", proc: "Latarjet + Remplissage \u2014 bipolar bone loss, most severe end of the spectrum." },
];

const overheadPatterns = [
  { name: "Batter's shoulder", arm: "Lead arm", dir: "Posterior instability", phase: "Follow-through", lesion: "Kim lesion / PoLPSA", tx: "Posterior labral repair if conservative fails (3\u20136 months)." },
  { name: "Internal impingement", arm: "Dominant/throwing arm", dir: "Posterior cuff impingement", phase: "Late cocking (ABER)", lesion: "SLAP, posterior cuff fraying", tx: "GIRD correction, posterior capsule stretching, mechanics." },
  { name: "GIRD", arm: "Dominant/throwing arm", dir: "Isolated rotation deficit, no instability", phase: "Present at rest, on exam", lesion: "Posterior capsule contracture", tx: "Sleeper stretch \u2014 primary treatment." },
];

const lpdManagement = [
  { window: "<3 weeks", mgmt: "Closed reduction under general anaesthesia." },
  { window: "3\u20136 weeks", mgmt: "May need open reduction \u2014 early fibrosis and bony changes already starting." },
  { window: ">6 weeks (chronic, locked)", mgmt: "McLaughlin procedure (subscapularis transfer into the defect), bone grafting, or RSA if joint destruction is severe." },
];

const irritabilityGeneral = [
  { feature: "Pain at rest", high: "Present", low: "Absent" },
  { feature: "Night pain", high: "Often severe", low: "Absent" },
  { feature: "Provocation needed", high: "Minimal \u2014 even light touch", low: "Significant, specific activity only" },
  { feature: "Typical VAS", high: "7\u201310", low: "1\u20134" },
  { feature: "PT approach", high: "Reduce irritability first \u2014 pain-free range only", low: "Proceed directly to full rehab incl. resisted strengthening" },
];

const conditionsTopics = [
  {
    id: "bankart", title: "Bankart lesion & variants",
    render: () => bankartVariants.map(v => `<div class="refItem"><div class="refItemTitle">${v.name}</div><div class="refItemBody">${v.note}<br><b>Management:</b> ${v.mgmt}</div></div>`).join(""),
  },
  {
    id: "massive", title: "Massive RC tear \u2014 3 definitions",
    render: () => massiveTearDefs.map(d => `<div class="refItem"><div class="refItemTitle">${d.name}</div><div class="refItemBody">${d.detail}</div></div>`).join("")
      + `<div class="refItem"><div class="refItemBody"><b>Decision order:</b> Goutallier grading first (0\u20132 keeps repair on the table, 3\u20134 rules it out) \u2192 Patte staging (1\u20132 favours repair, 3 unlikely) \u2192 Hornblower's sign clinically (positive \u2192 RSA territory regardless of imaging). \u201cMassive\u201d \u2260 \u201cirreparable.\u201d</div></div>`,
  },
  {
    id: "ahi", title: "AHI & Sourcil sign (X-ray)",
    render: () => ahiTable.map(a => `<div class="refItem"><div class="refItemTitle">${a.range}</div><div class="refItemBody">${a.meaning}</div></div>`).join(""),
  },
  {
    id: "cta", title: "Cuff tear arthropathy \u2192 RSA",
    render: () => `<div class="refItem"><div class="refItemBody">End-stage of a massive, chronic RC tear. Humeral head migrates superiorly \u2192 acromion \u201cacetabularizes,\u201d humeral head \u201cfemoralizes.\u201d Presents with pseudoparalysis, all lag signs positive, positive Hornblower's, crepitus, wasting.</div></div>
      <div class="refItem"><div class="refItemTitle">Why RSA, not TSA</div><div class="refItemBody">TSA needs an intact cuff to centre the head \u2014 will fail without one. RSA inverts the geometry (ball on glenoid, cup on humerus), medialises/lowers the centre of rotation, so the deltoid ALONE can elevate the arm. Elevation typically improves from <60\u00b0 to >120\u00b0 postop.</div></div>
      <div class="refItem"><div class="refItemTitle">RSA contraindications</div><div class="refItemBody">Active infection, deltoid paralysis, severe glenoid bone loss precluding fixation, axillary nerve palsy. An intact deltoid is non-negotiable.</div></div>`,
  },
  {
    id: "instability", title: "Anterior instability \u2014 decision matrix",
    render: () => `<div class="refItem"><div class="refItemBody">CT is mandatory before any instability procedure \u2014 MRI underestimates bone loss. Assess: (1) % glenoid bone loss, (2) Hill-Sachs on-track vs off-track.</div></div>`
      + instabilityMatrix.map(m => `<div class="refItem"><div class="refItemTitle">${m.boneLoss} + ${m.track}</div><div class="refItemBody">${m.proc}</div></div>`).join(""),
  },
  {
    id: "barbotage", title: "Barbotage \u2014 calcific tendinitis",
    render: () => `<div class="refItem"><div class="refItemBody">Ultrasound-guided needling + lavage, only for the resorptive (creamy, toothpaste-like) phase. 18\u201321G needle, repeated inject/aspirate with saline until milky-white fluid returns. Finish with subacromial Kenacort to blunt the post-procedure flare.</div></div>
      <div class="refItem"><div class="refItemTitle">Warn the patient</div><div class="refItemBody">Predictable pain flare at 24\u201348h as disrupted calcium disperses into the bursa \u2014 NSAIDs, ice, rest; settles in 48\u201372h, then dramatic improvement.</div></div>
      <div class="refItem"><div class="refItemTitle">When it won't work</div><div class="refItemBody">Hard, chalk-like formative-phase calcium won't aspirate \u2014 use ESWT instead.</div></div>`,
  },
  {
    id: "overhead", title: "Overhead athlete patterns",
    render: () => overheadPatterns.map(p => `<div class="refItem"><div class="refItemTitle">${p.name}</div><div class="refItemBody"><b>Arm:</b> ${p.arm} &nbsp; <b>Phase:</b> ${p.phase}<br><b>Lesion:</b> ${p.lesion}<br><b>Treatment:</b> ${p.tx}</div></div>`).join(""),
  },
  {
    id: "lpd", title: "Locked posterior dislocation",
    render: () => `<div class="refItem"><div class="refItemBody">Complete, fixed loss of BOTH active and passive external rotation after trauma (esp. seizure/electrocution) = this diagnosis until an axillary X-ray proves otherwise. AP view often deceptively normal \u2014 look for the light bulb sign and trough line sign.</div></div>`
      + lpdManagement.map(l => `<div class="refItem"><div class="refItemTitle">${l.window}</div><div class="refItemBody">${l.mgmt}</div></div>`).join(""),
  },
  {
    id: "irritability", title: "Irritability \u2014 HIGH vs LOW (general concept)",
    render: () => irritabilityGeneral.map(f => `<div class="refItem"><div class="refItemTitle">${f.feature}</div><div class="refItemBody"><b>High:</b> ${f.high}<br><b>Low:</b> ${f.low}</div></div>`).join("")
      + `<div class="refItem"><div class="refItemBody">Not the same as diagnosis \u2014 two patients with identical pathology can need completely different starting management depending on irritability. Classify it explicitly before writing a physio prescription.</div></div>`,
  },
];

// ---------- MRI READING DATA ----------
const mriSignalTable = [
  { seq: "T1", fat: "WHITE (bright) \u2014 \u201canatomy\u201d sequence", fluid: "Dark", use: "Muscle quality, Goutallier grading, general anatomy." },
  { seq: "T2", fat: "WHITE (bright)", fluid: "BRIGHT WHITE", use: "General pathology screening, fluid collections." },
  { seq: "T2 Fat-Sat (T2 FS)", fat: "DARK (suppressed)", fluid: "BRIGHT WHITE", use: "\u201cWhite object on black background.\u201d Best sequence for tears, marrow oedema, bursitis." },
  { seq: "T1 FS + Arthrogram", fat: "DARK", fluid: "Bright (gadolinium fills any tear/gap)", use: "Gold standard for labral pathology and SLAP." },
  { seq: "PD / PD FS", fat: "Intermediate", fluid: "Intermediate-to-bright", use: "Excellent general soft-tissue contrast \u2014 most relied on day-to-day." },
];

const tendonSignalTable = [
  { sig: "Black, uniform", dx: "Normal tendon", mgmt: "Reassure." },
  { sig: "Grey \u2014 less bright than a true tear", dx: "Tendinosis (degeneration, no gap)", mgmt: "Conservative \u2014 PT \u00b1 injection." },
  { sig: "Brighter grey", dx: "Partial-thickness tear", mgmt: "Conservative first-line, surgery if it fails." },
  { sig: "Fluid-bright white band", dx: "Complete tear", mgmt: "Surgical decision \u2014 factor Goutallier + retraction." },
  { sig: "Fluid-bright + gap + stump retraction", dx: "Massive tear", mgmt: "Full work-up: Goutallier, Patte, repair vs RSA." },
];

const goutallierTable = [
  { grade: "0", desc: "Pure grey, no fat", verdict: "Excellent repair candidate" },
  { grade: "1", desc: "Scattered fat streaks, fat <50%", verdict: "Good repair candidate" },
  { grade: "2", desc: "Moderate fat, still Fat < Muscle", verdict: "Repair possible, more guarded" },
  { grade: "3", desc: "Fat = Muscle roughly equal", verdict: "Poor prognosis \u2014 likely to re-tear" },
  { grade: "4", desc: "Fat > Muscle", verdict: "IRREPARABLE \u2014 RSA territory" },
];

const mriTopics = [
  {
    id: "signal", title: "Signal rules \u2014 T1 vs T2 vs T2FS",
    render: () => mriSignalTable.map(s => `<div class="refItem"><div class="refItemTitle">${s.seq}</div><div class="refItemBody"><b>Fat:</b> ${s.fat} &nbsp; <b>Fluid:</b> ${s.fluid}<br><b>Use:</b> ${s.use}</div></div>`).join("")
      + `<div class="refItem"><div class="refItemBody">Normal tendon is BLACK on every sequence. Any brightness = some abnormality.</div></div>`,
  },
  {
    id: "tendon", title: "Tendon signal \u2192 diagnosis",
    render: () => tendonSignalTable.map(s => `<div class="refItem"><div class="refItemTitle">${s.sig}</div><div class="refItemBody"><b>${s.dx}</b> \u2014 ${s.mgmt}</div></div>`).join("")
      + `<div class="refItem"><div class="refItemBody">When a report says \u201cincreased signal,\u201d always ask: intermediate (tendinosis) or fluid-bright (tear)? The wording can be ambiguous \u2014 the image isn't.</div></div>`,
  },
  {
    id: "magicangle", title: "Magic angle artifact",
    render: () => `<div class="refItem"><div class="refItemBody">Tendon at ~55\u00b0 to the magnetic field (exactly the angle supraspinatus adopts near its insertion) \u2192 falsely BRIGHT on T1/PD, purely physics, no pathology.</div></div>
      <div class="refItem"><div class="refItemTitle">The fix</div><div class="refItemBody">Check T2 FS \u2014 artifact resolves (goes DARK) there; a true tear stays fluid-bright on T2 FS. Bright on T1/PD but dark on T2 FS = artifact, not a tear.</div></div>`,
  },
  {
    id: "axial", title: "Axial plane checklist",
    render: () => `<div class="refItem"><div class="refItemBody">Coracoid + clavicle = always ANTERIOR \u2014 confirm on every slice to avoid L/R errors. Read top \u2192 down from the AC joint.</div></div>
      <div class="refItem"><div class="refItemTitle">4-point checklist</div><div class="refItemBody">1. Hill-Sachs \u2014 posteroSUPERIOR humeral head, one slice inferior to where coracoid disappears<br>2. Posterolateral concavity \u2014 structural confirmation, marrow oedema if acute<br>3. Subscapularis + biceps in its groove \u2014 empty groove = subscap tear until proven otherwise<br>4. Anterior labrum 3\u20136 o'clock \u2014 Bankart/Perthes/ALPSA zone, probe don't just look</div></div>`,
  },
  {
    id: "sagittal", title: "Sagittal plane & Goutallier",
    render: () => `<div class="refItem"><div class="refItemBody">T1 sagittal is the gold standard for muscle quality \u2014 NEVER T2 FS (fat suppression hides the fatty infiltration Goutallier depends on). The \u201cY view\u201d shows all 4 cuff muscles together.</div></div>`
      + goutallierTable.map(g => `<div class="refItem"><div class="refItemTitle">Grade ${g.grade}</div><div class="refItemBody">${g.desc} \u2014 ${g.verdict}</div></div>`).join("")
      + `<div class="refItem"><div class="refItemBody"><b>Key numbers:</b> supraspinatus footprint ~12mm AP = 3\u20134 consecutive 3mm coronal slices \u2014 never diagnose a full tear off one slice. Chronic tears retract ~4\u20135mm/year \u2014 delay narrows the repair window.</div></div>`,
  },
  {
    id: "coronal", title: "Coronal plane \u2014 SLAP & HAGL",
    render: () => `<div class="refItem"><div class="refItemTitle">Sublabral recess vs true SLAP</div><div class="refItemBody">Normal recess: smooth margin, medial to anchor, uniform signal, limited extent.<br>True SLAP: extends lateral to the anchor, irregular margins, irregular signal. Only actively hunt for SLAP on MRI when already clinically suspected \u2014 incidental signal change is common with age.</div></div>
      <div class="refItem"><div class="refItemTitle">HAGL</div><div class="refItemBody">IGHL avulses from the HUMERAL side. Normal attachment = J-shaped on coronal; HAGL disrupts the J-sign, with fluid at the humeral neck. Most common identifiable cause of a FAILED Bankart repair \u2014 miss it preop and the glenoid-side repair alone won't restore stability.</div></div>`,
  },
];

// ---------- INJECTIONS DATA ----------
const steroidTable = [
  { name: "Kenacort (Triamcinolone 40mg)", duration: "4\u20136 weeks", potency: "Higher, lower systemic absorption", space: "Preferred for SUBACROMIAL space \u2014 most RCT evidence" },
  { name: "Depomedrol (Methylprednisolone 40mg)", duration: "3\u20134 weeks", potency: "Moderate, higher systemic absorption", space: "Reasonable for intra-articular, esp. adhesive capsulitis" },
];

const injectionRecipes = [
  { name: "Subacromial", recipe: "Kenacort 40mg (1ml) + Lignocaine 2% (2ml) + Saline (1ml) = 4ml", tech: "Posterior approach, 1cm below + 1cm medial to the posterolateral acromion corner. LONG needle (21G \u00d7 2 inch) essential \u2014 bursa occupies only the ANTERIOR two-fifths of the space. Direct toward the coracoid, advance close to full length. Free flow confirms placement; resistance = repositioning needed, don't force it (tendon rupture risk)." },
  { name: "Intra-articular (glenohumeral)", recipe: "Kenacort 40mg (1ml) + Lignocaine 2% (2ml) = 3ml", tech: "Same posterior entry point. A distinct \u201cgive\u201d is felt entering the joint. Free flow confirms correct placement." },
  { name: "Hydrodistension (frozen shoulder)", recipe: "Saline 20ml + Kenacort 40mg (1ml) + Lignocaine 2% (2ml) = 23ml", tech: "ALWAYS under ultrasound guidance given the volume. Volume mechanically distends the contracted capsule, on top of the steroid effect." },
];

const conditionSpaceTable = [
  { cond: "External impingement", space: "Subacromial", steroid: "Kenacort 40mg", note: "Needs the long-needle technique." },
  { cond: "Acute subacromial bursitis", space: "Subacromial", steroid: "Kenacort (Depomedrol reasonable alt.)", note: "Responds particularly dramatically." },
  { cond: "Calcific tendinitis, resorptive", space: "Subacromial", steroid: "Kenacort, after barbotage", note: "Reduces the post-barbotage flare." },
  { cond: "SLAP tear", space: "INTRA-ARTICULAR \u2014 never subacromial", steroid: "Kenacort + lignocaine", note: "Subacromial injection here is a space error \u2014 no benefit." },
  { cond: "Frozen shoulder \u2014 freezing (pain-dominant)", space: "Intra-articular", steroid: "Kenacort 40mg", note: "Start PT the day after, uses the steroid window." },
  { cond: "Frozen shoulder \u2014 frozen (stiffness-dominant)", space: "Intra-articular, hydrodistension", steroid: "Hydrodistension recipe", note: "Volume is the active component, not just the steroid." },
  { cond: "AC joint arthritis", space: "Direct AC joint", steroid: "Depomedrol 20mg or Kenacort 20mg", note: "Small volume; accurate palpation essential." },
];

const injectionTopics = [
  {
    id: "steroid", title: "Choosing a steroid",
    render: () => steroidTable.map(s => `<div class="refItem"><div class="refItemTitle">${s.name}</div><div class="refItemBody"><b>Duration:</b> ${s.duration} &nbsp; <b>Potency:</b> ${s.potency}<br><b>Preferred for:</b> ${s.space}</div></div>`).join(""),
  },
  {
    id: "technique", title: "Technique & recipes",
    render: () => injectionRecipes.map(r => `<div class="refItem"><div class="refItemTitle">${r.name}</div><div class="refItemBody"><b>Recipe:</b> ${r.recipe}<br>${r.tech}</div></div>`).join(""),
  },
  {
    id: "spacematch", title: "Condition \u2192 correct space",
    render: () => conditionSpaceTable.map(c => `<div class="refItem"><div class="refItemTitle">${c.cond}</div><div class="refItemBody"><b>Space:</b> ${c.space} &nbsp; <b>Steroid:</b> ${c.steroid}<br>${c.note}</div></div>`).join(""),
  },
  {
    id: "safety", title: "General safety rules",
    render: () => `<div class="refItem"><div class="refItemBody">Max 3 injections/joint/year, minimum 6-week gap between them.</div></div>
      <div class="refItem"><div class="refItemBody">Never inject where infection is suspected, or into a known already-torn cuff \u2014 steroid weakens tendon further.</div></div>
      <div class="refItem"><div class="refItemBody">Immediate complete relief at injection = diagnostic confirmation the needle reached the pain source \u2014 diagnostic AND therapeutic in one.</div></div>
      <div class="refItem"><div class="refItemBody">Ultrasound-guided accuracy: 90\u201395%, vs ~60\u201370% blind. Strongly preferred where available, especially for hydrodistension.</div></div>`,
  },
];

// ---------- SURGICAL TECHNIQUES DATA ----------
const latarjetCompare = [
  { feat: "Bone transferred", classic: "Full coracoid process", bristow: "Only the coracoid tip" },
  { feat: "Fixation", classic: "2 parallel screws, lag technique", bristow: "1 screw" },
  { feat: "Glenoid coverage", classic: "Greater", bristow: "Less" },
  { feat: "Triple-blocking effect", classic: "Full effect", bristow: "Partial, less reliable" },
  { feat: "Current standing", classic: "Gold standard", bristow: "Mostly historical" },
];

const latarjetPearls = [
  { step: "Coracoid osteotomy direction", detail: "SUPEROMEDIAL to INFEROLATERAL \u2014 maximises graft length. Wrong angle = shorter graft, less coverage." },
  { step: "Subscapularis split level", detail: "Precisely at the junction of upper 1/3 and lower 2/3 \u2014 the single most technique-sensitive step. Wrong level kills the sling effect even with a perfectly placed graft." },
  { step: "Screw length", detail: "Remaining glenoid width (on CT) + 10mm for coracoid graft thickness. Typically 30\u201335mm \u2014 keep 25\u201340mm available in theatre." },
  { step: "Final graft position", detail: "Flush with the articular surface. Proud = impingement + cartilage damage. Recessed = inadequate coverage." },
];

const glenoidLossTable = [
  { loss: "<15%", approach: "Arthroscopic Bankart repair alone \u2014 soft tissue sufficient." },
  { loss: "15\u201325%", approach: "Borderline \u2014 most now favour Latarjet given higher recurrence with soft-tissue-only repair." },
  { loss: ">25%", approach: "Latarjet essentially mandatory." },
  { loss: "Massive / revision", approach: "Distal tibia allograft or Eden-Hybinette." },
];

const rcRepairCompare = [
  { feat: "Visualization", arthro: "EXCELLENT", miniopen: "More limited" },
  { feat: "Footprint coverage", arthro: "Good with double-row", miniopen: "MAXIMUM \u2014 box stitch" },
  { feat: "Cost", arthro: "Higher \u2014 anchors", miniopen: "LOWEST \u2014 no anchor cost" },
  { feat: "Osteoporotic bone", arthro: "Anchor pull-out risk", miniopen: "NO PROBLEM \u2014 tied over bone bridge" },
];

const rowConstructTable = [
  { name: "Single row", coverage: "50\u201360%", best: "Small tears (<~1cm), equivalent outcomes to double-row here" },
  { name: "Double row (true)", coverage: "90\u2013100%", best: "Large/massive tears \u2014 evidence favours it once tears are large" },
  { name: "Suture bridge", coverage: "Max, mimics open box-stitch", best: "Gold-standard arthroscopic option, large/massive tears" },
  { name: "Transosseous (mini-open)", coverage: "Max via box stitch", best: "Osteoporotic bone, cost-conscious settings" },
];

const tenodesisCompare = [
  { feat: "Popeye deformity", teno: "40\u201370% \u2014 unanchored belly bunches", tenodesis: "Rare \u2014 stays anchored" },
  { feat: "Cramping", teno: "10\u201320%", tenodesis: "Uncommon (subpectoral lowest rate)" },
  { feat: "Supination strength", teno: "10\u201320% loss", tenodesis: "Largely preserved" },
  { feat: "Best patient", teno: "Age >60, low demand, cosmesis not a concern", tenodesis: "Age 35\u201360, active/manual, muscular build" },
  { feat: "Post-op restriction", teno: "Immediate mobilisation OK", tenodesis: "NO supination for 6 weeks \u2014 #1 failure cause is patients using a screwdriver/jar lid too early" },
];

const arthroKnots = [
  { name: "Duncan loop", type: "Sliding", use: "Most widely used \u2014 default choice for general tissue approximation." },
  { name: "SMC knot", type: "Sliding, self-locking", use: "Favoured for Bankart/labral work where cyclic-load security matters." },
  { name: "Nicky knot", type: "Non-sliding", use: "Tied in final position \u2014 for high-tension repairs that won't slide smoothly." },
];

const bankartPortals = [
  { name: "Posterior (scope portal)", loc: "1cm below + 1cm medial to posterolateral acromion \u2014 the \u201csoft spot\u201d", use: "Default viewing portal for every shoulder arthroscopy; SCOI-15 starts here." },
  { name: "Anterosuperior (ASP)", loc: "Lateral to coracoid, superior to subscapularis, in the rotator interval", use: "Superior anchor (~3 o'clock), suture management, alternate view for SCOI points 11\u201315." },
  { name: "Anteroinferior (AIP) \u2014 workhorse", loc: "~5 o'clock on the glenoid, superior to subscapularis", use: "Primary working portal for instability surgery \u2014 labral prep, inferior anchors." },
  { name: "7 o'clock (posteroinferior)", loc: "Posteroinferior capsule", use: "Posterior labral repair, Kim lesion, posteroinferior capsular plication." },
];

const scoiPart1 = [
  { n: 1, name: "Biceps tendon", note: "Anchor integrity + continuity (1st of 2 views)" },
  { n: 2, name: "Posterior labrum", note: "Kim lesion, PoLPSA" },
  { n: 3, name: "Inferior axillary recess", note: "HAGL, MDI laxity" },
  { n: 4, name: "Glenoid articular surface", note: "Cartilage, arthritis, bone loss" },
  { n: 5, name: "Rotator cuff insertion", note: "Bursal-sided tears, footprint" },
  { n: 6, name: "Bare area of humeral head", note: "NORMAL \u2014 don't mistake for Hill-Sachs" },
  { n: 7, name: "Humeral head articular surface", note: "Chondromalacia" },
  { n: 8, name: "Rotator interval", note: "Thickened = capsulitis; patulous = MDI" },
  { n: 9, name: "Anteroinferior labrum", note: "Bankart zone \u2014 PROBE, don't just look" },
  { n: 10, name: "Anterior axillary recess", note: "HAGL, capsular laxity" },
];
const scoiPart2 = [
  { n: 11, name: "Posterior glenoid labrum", note: "Reassessed from a new angle" },
  { n: 12, name: "Posterior RC insertion", note: "Infraspinatus/teres minor tears" },
  { n: 13, name: "Anteroinferior glenoid labrum", note: "Second look at Bankart zone" },
  { n: 14, name: "Subscapularis + recess", note: "ALWAYS probe \u2014 upper subscap tears most missed" },
  { n: 15, name: "Biceps tendon", note: "2nd view \u2014 pulley pathology" },
];

const normalVariants = [
  { name: "Buford complex", app: "Absent anterosuperior labrum (1\u20133 o'clock) + thick cord-like MGHL", rule: "NEVER REPAIR \u2014 iatrogenic ER restriction if mistaken for a tear." },
  { name: "Sublabral foramen", app: "Normal hole in labrum, 1\u20133 o'clock, smooth margins", rule: "Don't mistake for Bankart tear." },
  { name: "Sublabral recess", app: "Smooth fluid signal at 12 o'clock, medial to biceps anchor", rule: "Normal \u2014 true SLAP extends lateral to anchor with irregular margins." },
  { name: "Bare area", app: "Posterosuperior humeral head lacking cartilage \u2014 universal", rule: "Don't mistake for Hill-Sachs (SCOI point 6)." },
];

const openApproaches = [
  { name: "Deltopectoral approach", use: "The workhorse approach \u2014 arthroplasty, open Bankart/Latarjet, proximal humerus ORIF.", interval: "Deltoid (axillary n.) vs pectoralis major (medial/lateral pectoral n.) \u2014 a true internervous plane.", landmark: "Cephalic vein marks the interval; kept either medially or laterally per surgeon preference.", risk: "Axillary nerve \u2014 runs inferiorly around subscapularis, at risk during inferior capsular work. Musculocutaneous nerve \u2014 enters the conjoint tendon ~5\u20138cm from the coracoid tip, at risk with aggressive medial retraction." },
  { name: "Superior / deltoid-splitting approach", use: "Mini-open rotator cuff repair, some proximal humerus fixation via a limited exposure.", interval: "Splits deltoid fibers directly (not a true internervous plane \u2014 within the same muscle).", landmark: "Split from the acromion edge, extended distally.", risk: "Axillary nerve \u2014 runs ~5\u20137cm below the lateral acromion edge on the deep surface of deltoid. STRICT limit: do not split deltoid more than ~5cm from the acromion without identifying the nerve directly." },
  { name: "Posterior approach", use: "Posterior instability/glenoid work, posterior capsular procedures, select tumour resections.", interval: "Infraspinatus (suprascapular n.) vs teres minor (axillary n.) \u2014 internervous plane.", landmark: "Posterior border of deltoid, spine of scapula.", risk: "Suprascapular nerve \u2014 at risk at the spinoglenoid notch during medial dissection/retraction of infraspinatus." },
  { name: "Rotator interval approach", use: "Open capsular release, some biceps/SLAP-adjacent procedures, superior capsule work.", interval: "Between supraspinatus and subscapularis, through the rotator interval tissue itself.", landmark: "Coracoid process as the medial reference point.", risk: "Biceps tendon runs directly through this interval \u2014 identify and protect early." },
];

const surgicalTopics = [
  {
    id: "openapproaches", title: "Open surgical approaches",
    render: () => openApproaches.map(a => `<div class="refItem"><div class="refItemTitle">${a.name}</div><div class="refItemBody"><b>Use:</b> ${a.use}<br><b>Interval:</b> ${a.interval}<br><b>Landmark:</b> ${a.landmark}<br><b>At risk:</b> ${a.risk}</div></div>`).join(""),
  },
  {
    id: "latarjet", title: "Latarjet procedure",
    render: () => `<div class="refItem"><div class="refItemBody">Triple-blocking effect: (1) bone block extends the glenoid arc \u2014 static; (2) conjoint tendon sling \u2014 dynamic, taut specifically in ABER, the exact position of dislocation risk; (3) capsular repair to the coracoid stump \u2014 static.</div></div>`
      + latarjetCompare.map(l => `<div class="refItem"><div class="refItemTitle">${l.feat}</div><div class="refItemBody"><b>Classic:</b> ${l.classic}<br><b>Bristow:</b> ${l.bristow}</div></div>`).join("")
      + `<div class="sectionLabel" style="margin-top:14px;">Technical pearls</div>`
      + latarjetPearls.map(p => `<div class="refItem"><div class="refItemTitle">${p.step}</div><div class="refItemBody">${p.detail}</div></div>`).join(""),
  },
  {
    id: "glenoplasty", title: "Glenoplasty \u2014 bone augmentation options",
    render: () => glenoidLossTable.map(g => `<div class="refItem"><div class="refItemTitle">${g.loss} glenoid bone loss</div><div class="refItemBody">${g.approach}</div></div>`).join("")
      + `<div class="refItem"><div class="refItemBody"><b>Eden-Hybinette</b> (iliac crest autograft) \u2014 failed prior Latarjet or coracoid unavailable, more donor-site morbidity, no dynamic sling.<br><b>Distal tibia allograft</b> \u2014 massive loss/revision, excellent anatomic curvature match, gaining popularity.</div></div>`,
  },
  {
    id: "rcrepair", title: "RC repair \u2014 approach & construct",
    render: () => rcRepairCompare.map(r => `<div class="refItem"><div class="refItemTitle">${r.feat}</div><div class="refItemBody"><b>Arthroscopic:</b> ${r.arthro}<br><b>Mini-open transosseous:</b> ${r.miniopen}</div></div>`).join("")
      + `<div class="sectionLabel" style="margin-top:14px;">Row configuration</div>`
      + rowConstructTable.map(r => `<div class="refItem"><div class="refItemTitle">${r.name} \u2014 ${r.coverage}</div><div class="refItemBody">${r.best}</div></div>`).join("")
      + `<div class="refItem"><div class="refItemBody">Avoid rigid abduction-brace immobilisation post-repair regardless of technique \u2014 gentle Codman pendulum from Day 1 supports healing better than prolonged rigid immobilisation.</div></div>`,
  },
  {
    id: "tenodesis", title: "Biceps tenotomy vs tenodesis",
    render: () => tenodesisCompare.map(t => `<div class="refItem"><div class="refItemTitle">${t.feat}</div><div class="refItemBody"><b>Tenotomy:</b> ${t.teno}<br><b>Tenodesis:</b> ${t.tenodesis}</div></div>`).join(""),
  },
  {
    id: "knots", title: "Arthroscopic knots",
    render: () => arthroKnots.map(k => `<div class="refItem"><div class="refItemTitle">${k.name} <span class="sub">\u2014 ${k.type}</span></div><div class="refItemBody">${k.use}</div></div>`).join(""),
  },
  {
    id: "bankartportals", title: "Bankart repair portals & sequence",
    render: () => bankartPortals.map(p => `<div class="refItem"><div class="refItemTitle">${p.name}</div><div class="refItemBody"><b>Location:</b> ${p.loc}<br><b>Use:</b> ${p.use}</div></div>`).join("")
      + `<div class="refItem"><div class="refItemBody">Anchor sequence: work INFERIOR \u2192 superior. 5\u20136 o'clock first, then 4 o'clock, then 3 o'clock \u2014 reverse order causes suture-management problems. Every anterior portal confirmed with a spinal needle first, never established blind \u2014 stay lateral to the coracoid to avoid the musculocutaneous nerve.</div></div>`,
  },
];

// ---------- ARTHROSCOPY DATA ----------
const arthroscopyTopics = [
  {
    id: "scoi", title: "SCOI 15-point survey",
    render: () => `<div class="refItem"><div class="refItemBody">Fixed checklist, completed before any surgical step. Points 1\u201310 from the posterior portal, 11\u201315 from the anterosuperior portal.</div></div>`
      + scoiPart1.map(s => `<div class="refItem"><div class="refItemTitle">${s.n}. ${s.name}</div><div class="refItemBody">${s.note}</div></div>`).join("")
      + `<div class="sectionLabel" style="margin-top:14px;">From anterosuperior portal</div>`
      + scoiPart2.map(s => `<div class="refItem"><div class="refItemTitle">${s.n}. ${s.name}</div><div class="refItemBody">${s.note}</div></div>`).join(""),
  },
  {
    id: "portals", title: "Portals \u2014 consolidated reference",
    render: () => bankartPortals.map(p => `<div class="refItem"><div class="refItemTitle">${p.name}</div><div class="refItemBody"><b>Location:</b> ${p.loc}<br><b>Use:</b> ${p.use}</div></div>`).join(""),
  },
  {
    id: "variants", title: "Normal variants \u2014 don't repair these",
    render: () => normalVariants.map(v => `<div class="refItem"><div class="refItemTitle">${v.name}</div><div class="refItemBody"><b>Appearance:</b> ${v.app}<br><b>Rule:</b> ${v.rule}</div></div>`).join(""),
  },
];

// ---------- REFERENCES DATA ----------
const eponyms = [
  { name: "Neer", meaning: "Impingement sign/test (1972); original description of cuff tear arthropathy (1983)" },
  { name: "Goutallier", meaning: "Fatty infiltration grading, 0\u20134, on CT/MRI T1 sagittal" },
  { name: "Patte", meaning: "Supraspinatus retraction staging, 1\u20133" },
  { name: "Cofield", meaning: "Size-based massive tear definition (>5cm)" },
  { name: "Gerber", meaning: "Lift-off test; tendon-based massive tear definition (\u22652 tendons)" },
  { name: "Kibler", meaning: "SICK scapula concept; scapular dyskinesis classification" },
  { name: "McLaughlin", meaning: "Reverse Hill-Sachs lesion; subscapularis transfer procedure for it" },
  { name: "Eden-Hybinette", meaning: "Iliac crest graft technique for anterior glenoid augmentation" },
  { name: "Latarjet", meaning: "Coracoid transfer for anterior instability with glenoid bone loss" },
  { name: "Bristow", meaning: "Earlier coracoid-tip-only transfer, now less used" },
  { name: "Burkhart", meaning: "Disabled Throwing Shoulder trilogy; rotator cable concept" },
  { name: "Maitland", meaning: "Graded oscillation mobilisation (Grade I\u2013IV); tissue irritability concept" },
  { name: "Codman", meaning: "Pendulum exercise \u2014 gravity-assisted passive distraction" },
];

// ---------- REFERENCES DATA ----------
const keyPapers = [
  { title: "The Disabled Throwing Shoulder: Spectrum of Pathology \u2014 Part I", cite: "Burkhart SS, Morgan CD, Kibler WB \u00b7 Arthroscopy 2003;19(4):404\u2013420", note: "Establishes the unified DTS concept; proposes the GIRD-and-peel-back mechanism over microinstability as the core pathophysiology. Introduces \u201cdead arm\u201d syndrome." },
  { title: "The Disabled Throwing Shoulder \u2014 Part II: SLAP Lesions in Throwers", cite: "Burkhart SS, Morgan CD, Kibler WB \u00b7 Arthroscopy 2003;19(5):531\u2013539", note: "Clinical evaluation and arthroscopic management of SLAP in throwers, building on Part I's mechanism." },
  { title: "The Disabled Throwing Shoulder \u2014 Part III: SICK Scapula, Kinetic Chain, Rehab", cite: "Burkhart SS, Morgan CD, Kibler WB \u00b7 Arthroscopy 2003;19(6):641\u2013661", note: "Introduces the SICK Scapula concept and situates scapular dysfunction in the broader kinetic chain. Most practical of the three for routine OPD use." },
  { title: "Shoulder Pain and Mobility Deficits: Adhesive Capsulitis \u2014 CPG", cite: "Kelley MJ et al \u00b7 JOSPT 2013;43(5):A1\u2013A31", note: "The primary formal clinical practice guideline for adhesive capsulitis; ties PT decisions directly to irritability classification." },
  { title: "Frozen Shoulder: Evidence and a Proposed Model Guiding Rehabilitation", cite: "Kelley MJ, McClure PW, Leggin BG \u00b7 JOSPT 2009;39(2)", note: "The earlier paper establishing the low/moderate/high irritability classification used throughout." },
  { title: "2022 Bern Consensus Statement on Shoulder Injury Prevention & Rehab", cite: "JOSPT 2022;52(1):11\u201328", note: "Extends the staged, irritability-based approach to shoulder rehab more broadly, beyond adhesive capsulitis." },
  { title: "Maitland's Peripheral Manipulation \u2014 Graded Oscillation Technique", cite: "Geoffrey Maitland (foundational text)", note: "Original source of the irritability concept and the Grade I\u2013IV graded oscillation mobilisation technique." },
];

const referenceTopics = [
  { id: "papers", title: "Must-read papers", render: () => keyPapers.map(p => `<div class="refItem"><div class="refItemTitle">${p.title}</div><div class="refItemBody"><span class="sub">${p.cite}</span><br>${p.note}</div></div>`).join("") },
  { id: "eponyms", title: "Eponyms", render: () => eponyms.map(e => `<div class="refItem"><div class="refItemTitle">${e.name}</div><div class="refItemBody">${e.meaning}</div></div>`).join("") },
];

// ---------- CLASSIFICATIONS DATA (standard textbook systems) ----------
const neerParts = [
  { part: "1-part", desc: "No segment displaced >1cm or angulated >45\u00b0, regardless of how many fracture lines are present. Most common pattern (~80\u201385% of all proximal humerus fractures).", mgmt: "Conservative \u2014 sling, early pendulum/passive motion once pain allows." },
  { part: "2-part", desc: "One segment (surgical neck, greater tuberosity, lesser tuberosity, or anatomic neck) meets the displacement/angulation criteria.", mgmt: "Depends which segment: displaced surgical neck often needs fixation (plate/nail); greater tuberosity displacement >5mm is a rotator cuff functional problem \u2014 fix it even if otherwise minor." },
  { part: "3-part", desc: "Two segments displaced \u2014 classically surgical neck + one tuberosity, with the other tuberosity still attached to the head (partial blood supply preserved).", mgmt: "Usually surgical \u2014 ORIF favoured in reasonable bone stock; higher AVN risk than 2-part." },
  { part: "4-part", desc: "All four segments displaced \u2014 head, both tuberosities, and shaft all separated. Head has lost both tuberosity-based blood supply routes.", mgmt: "Highest AVN risk. Elderly/osteoporotic \u2014 arthroplasty (hemi or RSA, RSA favoured if cuff compromised). Younger with good bone \u2014 ORIF can be attempted." },
  { part: "Fracture-dislocation / head-splitting", desc: "Added by Neer beyond the basic 4-segment scheme \u2014 the articular surface itself is fragmented, or the head is dislocated in addition to the fracture pattern.", mgmt: "Worst prognosis category \u2014 usually arthroplasty." },
];

const rockwoodTypes = [
  { type: "I", desc: "AC ligament sprain only. CC ligaments intact. No displacement.", mgmt: "Non-operative." },
  { type: "II", desc: "AC ligament ruptured. CC ligaments sprained but intact. Slight superior displacement, AC joint widened.", mgmt: "Non-operative." },
  { type: "III", desc: "Both AC and CC ligaments ruptured. Clavicle displaced up to 100% superiorly relative to the acromion.", mgmt: "Controversial \u2014 many now subdivide: IIIA (stable scapula) trial non-op; IIIB (high-demand, scapular dyskinesis/winging) favours surgery." },
  { type: "IV", desc: "Both ligaments ruptured, clavicle displaced POSTERIORLY, buttonholed through or into the trapezius.", mgmt: "ALWAYS operative." },
  { type: "V", desc: "Exaggerated type III \u2014 superior displacement >100\u2013300%, with the deltotrapezial fascia stripped off the clavicle.", mgmt: "Operative." },
  { type: "VI", desc: "Rare \u2014 clavicle displaced INFERIORLY, lodged subacromial or subcoracoid. Mechanism: hyperabduction + ER.", mgmt: "Operative." },
];

const walchTypes = [
  { type: "A1", desc: "Centred humeral head, minor central glenoid erosion.", note: "Most common pattern \u2014 straightforward TSA candidate." },
  { type: "A2", desc: "Centred humeral head, major central erosion.", note: "Still centred, but more bone loss to manage at arthroplasty." },
  { type: "B1", desc: "Posterior humeral head subluxation, posterior joint narrowing/sclerosis, no frank bony erosion yet.", note: "Early posterior-wear pattern." },
  { type: "B2", desc: "Posterior subluxation WITH posterior erosion \u2014 creates a biconcave glenoid (two separate wear facets).", note: "Classic challenging pattern for TSA \u2014 retroversion correction needed to avoid early glenoid component loosening." },
  { type: "B3", desc: "(Modified Walch) Monoconcave with severe posterior wear \u2014 retroversion \u226515\u00b0 or subluxation \u226570%, or both.", note: "Often associated with posterior cuff (infraspinatus/teres minor) fatty infiltration \u2014 check Goutallier posteriorly." },
  { type: "C", desc: "Dysplastic glenoid, \u226525\u00b0 retroversion regardless of erosion pattern.", note: "Developmental, not purely wear-related." },
  { type: "D", desc: "(Modified) Anteverted glenoid, or anterior humeral head subluxation \u2014 the reverse pattern of B.", note: "Uncommon; opposite correction direction needed at arthroplasty." },
];

const classificationsTopics = [
  {
    id: "neer", title: "Neer classification \u2014 proximal humerus #",
    render: () => `<div class="refItem"><div class="refItemBody">Based on 4 anatomic segments: articular surface (head), greater tuberosity, lesser tuberosity, shaft. A segment counts as a separate \u201cpart\u201d only if displaced >1cm OR angulated >45\u00b0 \u2014 number of fracture lines alone doesn't matter.</div></div>`
      + neerParts.map(n => `<div class="refItem"><div class="refItemTitle">${n.part}</div><div class="refItemBody">${n.desc}<br><b>Management:</b> ${n.mgmt}</div></div>`).join("")
      + `<div class="refItem"><div class="refItemBody">Axillary nerve is the most commonly injured nerve \u2014 always document deltoid sensation and contraction before and after any manipulation. AVN risk rises with part-count, since each additional displaced segment represents more disrupted blood supply to the head (posterior humeral circumflex artery is the dominant supply).</div></div>`,
  },
  {
    id: "rockwood", title: "Rockwood classification \u2014 AC joint injury",
    render: () => `<div class="refItem"><div class="refItemBody">Based on which ligaments fail (AC vs coracoclavicular/CC) and direction + degree of clavicle displacement.</div></div>`
      + rockwoodTypes.map(r => `<div class="refItem"><div class="refItemTitle">Type ${r.type}</div><div class="refItemBody">${r.desc}<br><b>Management:</b> ${r.mgmt}</div></div>`).join(""),
  },
  {
    id: "walch", title: "Walch classification \u2014 glenoid morphology (OA)",
    render: () => `<div class="refItem"><div class="refItemBody">Used pre-operatively before shoulder arthroplasty to describe glenoid wear pattern in primary glenohumeral osteoarthritis \u2014 directly affects implant choice and whether reaming/augmentation/RSA is needed.</div></div>`
      + walchTypes.map(w => `<div class="refItem"><div class="refItemTitle">Type ${w.type}</div><div class="refItemBody">${w.desc}<br>${w.note}</div></div>`).join(""),
  },
];

function renderDiagnosisBlock(d, keyPrefix, di) {
  const keys = d.tests.map((t, ti) => keyPrefix + "-" + di + "-" + ti);
  const status = diagnosisStatus(d.tests, keys);
  const badge = status === "supported" ? `<span class="statusBadge supported">Supported</span>` : status === "unlikely" ? `<span class="statusBadge unlikely">Unlikely</span>` : "";
  let html = `<div class="diagHeader"><div class="sectionLabel">${d.name}</div>${badge}</div>`;
  if (d.note) {
    html += `<div class="refBox"><div class="refItem"><div class="refItemBody">${d.note}</div></div></div>`;
  }
  d.tests.forEach((t, ti) => {
    const key = keys[ti];
    const open = expandedTests.has(key);
    const res = testResults[key];
    html += `
      <div class="testRow">
        <button class="testNameBtn" data-testkey="${key}"><span>${t.name}</span></button>
        <div class="resultBtns">
          <button class="resBtn neg ${res === "neg" ? "active" : ""}" data-result="neg" data-key="${key}" aria-label="Negative">\u2212</button>
          <button class="resBtn pos ${res === "pos" ? "active" : ""}" data-result="pos" data-key="${key}" aria-label="Positive">+</button>
        </div>
      </div>`;
    if (open) {
      html += `<div class="refBox"><div class="refItem"><div class="refItemBody"><b>How to do it:</b> ${t.how}<br><b>Positive finding:</b> ${t.positive}<br><b>What it tells you:</b> ${t.value}</div></div></div>`;
    }
  });

  // Inline management — the point where the flow pays off
  const mgmt = diagnosisManagementMap[d.name];
  if (status === "supported" && mgmt) {
    const mgmtKey = "mgmt-" + keyPrefix + "-" + di;
    const mgmtOpen = expandedTests.has(mgmtKey);
    html += `<button class="mgmtToggle" data-testkey="${mgmtKey}">${mgmtOpen ? "\u2212" : "\u2192"} Management for ${d.name}</button>`;
    if (mgmtOpen) {
      html += `<div class="mgmtGrid">
        <div class="mgmtCard m-edu"><div class="mgmtHead">${ICONS.book}<span class="mgmtLabel">Education</span></div><div class="mgmtBody">${mgmt.education}</div></div>
        <div class="mgmtCard m-pharma"><div class="mgmtHead">${ICONS.pill}<span class="mgmtLabel">Pharmacological</span></div><div class="mgmtBody">${mgmt.pharma}</div></div>
        <div class="mgmtCard m-rehab"><div class="mgmtHead">${ICONS.refresh}<span class="mgmtLabel">Rehab</span></div><div class="mgmtBody">${mgmt.rehab}</div></div>
        <div class="mgmtCard m-injection"><div class="mgmtHead">${ICONS.droplet}<span class="mgmtLabel">Injection</span></div><div class="mgmtBody">${mgmt.injection}</div></div>
        <div class="mgmtCard m-surgery"><div class="mgmtHead">${ICONS.scalpel}<span class="mgmtLabel">Surgery</span></div><div class="mgmtBody">${mgmt.surgery}</div></div>
      </div>`;
    }
  }
  return html;
}

function renderWorkingDifferential(allDiagBlocks) {
  const supported = [];
  allDiagBlocks.forEach(({ d, keyPrefix, di }) => {
    const keys = d.tests.map((t, ti) => keyPrefix + "-" + di + "-" + ti);
    const posTests = d.tests.filter((t, ti) => testResults[keys[ti]] === "pos").map((t) => t.name);
    if (posTests.length > 0) supported.push({ name: d.name, via: posTests });
  });
  if (supported.length === 0) return "";
  const items = supported.map((s) => `<div class="refItem"><div class="refItemTitle">${s.name}</div><div class="refItemBody">Supported by: ${s.via.join(", ")}</div></div>`).join("");
  return `<div class="resultBox flag-teal"><div class="boxHead">${ICONS.check}<div class="label" style="margin-bottom:0;">Working differential \u2014 based on recorded findings</div></div><div class="refBox" style="margin-top:8px;">${items}</div></div>`;
}

// ---------- MANAGEMENT PROTOCOLS DATA ----------
const managementTopics = [
  {
    id: "cufftear", title: "Rotator cuff tear \u2014 full pathway",
    render: () => `
      <div class="refItem"><div class="refItemTitle">Partial-thickness tear</div><div class="refItemBody">First-line conservative: activity modification, NSAIDs, targeted cuff + scapular strengthening. Subacromial injection if not settling by 6\u20138 weeks. If still failing at 3\u20136 months \u2192 MRI/USG to size the tear, then consider arthroscopic debridement or repair.</div></div>
      <div class="refItem"><div class="refItemTitle">Acute traumatic complete tear (positive lag sign)</div><div class="refItemBody">Do not \u201cwait and see.\u201d Refer promptly for early repair \u2014 ideally within 3\u20136 weeks \u2014 before muscle atrophy and fatty infiltration set in and reduce the chance of successful repair.</div></div>
      <div class="refItem"><div class="refItemTitle">Chronic degenerative full-thickness tear \u2014 elderly, low demand</div><div class="refItemBody">Conservative trial first is reasonable \u2014 PT + injection, since many tolerate a chronic tear well functionally. Progress to surgery if pain persists despite 3\u20136 months of conservative care, or if weakness is progressive.</div></div>
      <div class="refItem"><div class="refItemTitle">Massive / irreparable, elderly, pseudoparalysis</div><div class="refItemBody">Reverse shoulder arthroplasty is the reliable option once Goutallier grade 3\u20134 and/or a positive Hornblower's sign are present \u2014 repair is unlikely to succeed regardless of technique.</div></div>
      <div class="refItem"><div class="refItemBody">Decision inputs to document at each step: Goutallier grade (muscle quality), Patte stage (retraction), Hornblower's sign (teres minor function) \u2014 see Classifications and Conditions for detail.</div></div>`,
  },
  {
    id: "acinjury", title: "AC joint injury (traumatic) \u2014 full pathway",
    render: () => `
      <div class="refItem"><div class="refItemBody">NOTE: this is the TRAUMATIC separation pattern, graded I\u2013VI (Rockwood). For the degenerative wear-and-tear pattern instead, see Conditions / OPD \u2192 \u201cAC joint arthritis.\u201d</div></div>
      <div class="refItem"><div class="refItemTitle">Type I\u2013II</div><div class="refItemBody">Conservative \u2014 sling for comfort a few days, ice, NSAIDs, early ROM as tolerated. Return to sport typically 1\u20133 weeks once pain-free.</div></div>
      <div class="refItem"><div class="refItemTitle">Type III</div><div class="refItemBody">Trial conservative first, 6\u201312 weeks \u2014 sling, PT, activity modification \u2014 especially if the pattern is stable (low-demand). Move to surgery if there's persistent pain/dysfunction, or if the presentation is high-demand with scapular dyskinesis.</div></div>
      <div class="refItem"><div class="refItemTitle">Type IV\u2013VI</div><div class="refItemBody">Operative \u2014 CC ligament reconstruction, ideally early (within ~3 weeks) before the displaced soft tissue heals in the wrong position and becomes harder to mobilise.</div></div>
      <div class="refItem"><div class="refItemBody">Grade determines the pathway (see Classifications \u2014 Rockwood) \u2014 always confirm grade with weighted/axillary views before committing to a plan.</div></div>`,
  },
  {
    id: "instabpath", title: "Instability \u2014 full pathway",
    render: () => `
      <div class="refItem"><div class="refItemTitle">First-time traumatic anterior dislocation, young patient</div><div class="refItemBody">Reduce, then a short period of sling immobilisation (1\u20132 weeks) followed by structured rehab. Recurrence risk is very high in young/athletic patients \u2014 discuss early stabilisation surgery even after a single dislocation if high-demand or significant bone loss is present, rather than waiting for a second episode.</div></div>
      <div class="refItem"><div class="refItemTitle">Recurrent instability / failed conservative</div><div class="refItemBody">CT for glenoid bone loss % + Hill-Sachs on-track/off-track status \u2192 apply the instability decision matrix (see Conditions) to choose ABR alone, ABR + Remplissage, or Latarjet.</div></div>
      <div class="refItem"><div class="refItemTitle">Atraumatic instability / MDI</div><div class="refItemBody">Primarily conservative \u2014 extended physiotherapy (rotator cuff + scapular stabilisation, capsular strengthening) for a minimum of 6 months before surgery is considered. Surgery, when needed, is rotator interval plication \u2014 not a standard Bankart repair.</div></div>`,
  },
  {
    id: "calcificpath", title: "Calcific tendinitis \u2014 full pathway",
    render: () => `
      <div class="refItem"><div class="refItemTitle">Acute, resorptive phase (severe pain)</div><div class="refItemBody">X-ray first to confirm. NSAIDs, subacromial steroid injection, sling rest. Barbotage if the deposit has a creamy consistency on ultrasound \u2014 most patients improve dramatically. Do NOT start aggressive physiotherapy in this phase, it worsens symptoms.</div></div>
      <div class="refItem"><div class="refItemTitle">Chronic / formative phase (hard, chalky deposit)</div><div class="refItemBody">Conservative PT + NSAIDs first-line. Barbotage won't work on hard calcium \u2014 extracorporeal shockwave therapy (ESWT) is the next step if it doesn't resolve.</div></div>
      <div class="refItem"><div class="refItemTitle">Refractory</div><div class="refItemBody">Arthroscopic removal reserved for cases that fail both conservative management and ESWT, typically after a 6-month trial.</div></div>`,
  },
  {
    id: "impingementpath", title: "Impingement / subacromial bursitis \u2014 full pathway",
    render: () => `
      <div class="refItem"><div class="refItemTitle">First-line (weeks 0\u20136)</div><div class="refItemBody">Activity modification, NSAIDs, scapular-focused physiotherapy (serratus anterior + lower trapezius strengthening, inhibit upper trapezius \u2014 see Rehab for the full exercise Rx). Skip TENS/ultrasound/IFT/laser \u2014 no real evidence.</div></div>
      <div class="refItem"><div class="refItemTitle">Not settling by 6\u20138 weeks</div><div class="refItemBody">Subacromial Kenacort injection (long-needle technique \u2014 see Injections), continue the exercise program alongside it. Up to 2\u20133 injections total, spaced appropriately.</div></div>
      <div class="refItem"><div class="refItemTitle">Failing a genuine 6-month conservative trial</div><div class="refItemBody">Only now does surgery enter the conversation \u2014 arthroscopic subacromial decompression \u00b1 acromioplasty. ~80% of patients improve enough on conservative management alone to avoid this step.</div></div>
      <div class="refItem"><div class="refItemBody">Check the AHI on a routine AP X-ray at the outset \u2014 normal AHI (7\u201314mm) supports staying conservative with confidence; a falling AHI redirects the conversation toward a structural cuff tear (see Conditions \u2014 AHI & Sourcil sign).</div></div>`,
  },
  {
    id: "capsulitispath", title: "Adhesive capsulitis \u2014 full pathway",
    render: () => `
      <div class="refItem"><div class="refItemTitle">Classify irritability first</div><div class="refItemBody">Injection choice and physiotherapy intensity both depend on irritability level (High/Medium/Low), not simply on freezing/frozen/thawing phase \u2014 see Rehab for the full irritability-matched injection + stretching programme.</div></div>
      <div class="refItem"><div class="refItemTitle">High irritability (freezing, pain-dominant)</div><div class="refItemBody">Intra-articular Kenacort, gentle Codman pendulum only \u2014 reduce irritability before pushing range.</div></div>
      <div class="refItem"><div class="refItemTitle">Low irritability (frozen, stiffness-dominant)</div><div class="refItemBody">Hydrodistension + aggressive passive stretching, ER stretch prioritised.</div></div>
      <div class="refItem"><div class="refItemTitle">Refractory after 4\u20136 months of structured conservative care</div><div class="refItemBody">Manipulation under anaesthesia (MUA) or arthroscopic capsular release, targeting the rotator interval first (the earliest-contracted structure). Aggressive PROM starts immediately post-procedure to hold the gains made under anaesthesia.</div></div>
      <div class="refItem"><div class="refItemBody">Screen for diabetes/thyroid disease at diagnosis \u2014 both raise recurrence/bilateral risk and should shape counselling on expected course.</div></div>`,
  },
  {
    id: "slappath", title: "SLAP tear \u2014 full pathway",
    render: () => `
      <div class="refItem"><div class="refItemTitle">Non-throwing patient, low-demand</div><div class="refItemBody">Conservative first \u2014 activity modification, scapular stabilisation, rotator cuff strengthening. Many settle without surgery, especially over-40 patients where a degenerative SLAP change is often incidental rather than the pain generator.</div></div>
      <div class="refItem"><div class="refItemTitle">Throwing / overhead athlete (Disabled Throwing Shoulder)</div><div class="refItemBody">Follow the staged DTS rehab (see Rehab) \u2014 posterior capsular stretching is the centrepiece early on. Reassess at 3 months; MRI arthrogram + surgical discussion if not adequately resolved by then rather than extending conservative care indefinitely.</div></div>
      <div class="refItem"><div class="refItemTitle">Surgical indication</div><div class="refItemBody">Failed structured conservative trial with a positive O'Brien's + Crank test and a matching clinical picture. Arthroscopic SLAP repair vs biceps tenodesis depends on age, tear pattern, and whether the biceps anchor itself is destabilised \u2014 tenodesis often preferred over repair in patients >35\u201340 given more reliable outcomes at that age (see Surgical techniques \u2014 tenotomy vs tenodesis).</div></div>`,
  },
  {
    id: "arthritispath", title: "Glenohumeral arthritis \u2014 full pathway",
    render: () => `
      <div class="refItem"><div class="refItemTitle">First-line, any age</div><div class="refItemBody">NSAIDs, activity modification, intra-articular steroid injection for symptomatic flares, physiotherapy to maintain ROM and strength.</div></div>
      <div class="refItem"><div class="refItemTitle">Younger, high-demand patient failing conservative care</div><div class="refItemBody">Consider joint-preserving options first (arthroscopic debridement, capsular release) before committing to arthroplasty, given implant longevity concerns in a young patient.</div></div>
      <div class="refItem"><div class="refItemTitle">Older patient, failing conservative care, cuff intact</div><div class="refItemBody">Total shoulder arthroplasty (TSA). Glenoid morphology (Walch type \u2014 see Classifications) determines whether straightforward reaming suffices or augmented components are needed, especially B2/B3/C patterns.</div></div>
      <div class="refItem"><div class="refItemBody">If the cuff is deficient alongside the arthritis \u2014 this is cuff tear arthropathy, not simple arthritis, and needs RSA instead of TSA (see Conditions for the full rationale).</div></div>`,
  },
  {
    id: "phfxpath", title: "Proximal humerus fracture \u2014 full pathway",
    render: () => `
      <div class="refItem"><div class="refItemTitle">1-part (minimal displacement)</div><div class="refItemBody">Conservative \u2014 sling, early pendulum/passive motion once pain allows, progressing per standard fracture-healing timelines. Covers the large majority of these fractures.</div></div>
      <div class="refItem"><div class="refItemTitle">2-part</div><div class="refItemBody">Displaced surgical neck often needs fixation. Isolated greater tuberosity displacement >5mm should be fixed even though it looks otherwise minor \u2014 it's a rotator cuff functional problem, not just a fracture-healing one.</div></div>
      <div class="refItem"><div class="refItemTitle">3-part</div><div class="refItemBody">Usually surgical \u2014 ORIF in reasonable bone stock. Higher AVN risk than 2-part; counsel accordingly.</div></div>
      <div class="refItem"><div class="refItemTitle">4-part / head-splitting / fracture-dislocation</div><div class="refItemBody">Elderly or osteoporotic \u2014 arthroplasty (RSA favoured if the cuff is compromised). Younger with good bone stock \u2014 ORIF can still be attempted, accepting a real AVN risk.</div></div>
      <div class="refItem"><div class="refItemBody">Document axillary nerve status (deltoid sensation + contraction) before AND after any manipulation, at every stage \u2014 it's the most commonly injured nerve here.</div></div>`,
  },
];

// ---------- IMAGING GUIDE DATA ----------
const imagingModalityTopics = [
  {
    id: "xray", title: "X-ray \u2014 always first",
    render: () => `<div class="refItem"><div class="refItemBody">Cheapest, fastest, and the correct first study for almost everything shoulder-related \u2014 order it before reaching for cross-sectional imaging.</div></div>
      <div class="refItem"><div class="refItemTitle">Order for</div><div class="refItemBody">Any trauma / suspected fracture-dislocation (AP + axillary or scapular-Y view \u2014 axillary view is essential, an AP alone can miss a posterior dislocation). AC joint injury grading (weighted views comparing both sides). Calcific tendinitis (visualises the deposit and its consistency-suggestive density). Chronic pain screening \u2014 AHI measurement, glenohumeral arthritis changes, Sourcil sign for a chronic massive cuff tear. Baseline before any injection.</div></div>`,
  },
  {
    id: "usg", title: "Ultrasound \u2014 dynamic, cheap, operator-dependent",
    render: () => `<div class="refItem"><div class="refItemBody">Real-time, dynamic, inexpensive, and radiation-free \u2014 excellent for full-thickness rotator cuff tears specifically. Quality is heavily operator-dependent, which limits its use for surgical planning compared to MRI.</div></div>
      <div class="refItem"><div class="refItemTitle">Order for</div><div class="refItemBody">Suspected full-thickness cuff tear \u2014 strong first-line choice, fast and often as accurate as MRI for this specific question. Biceps tendon pathology. Subacromial bursitis/effusion. Guided injections (subacromial, intra-articular). Calcific deposit consistency (creamy vs chalky) before deciding on barbotage vs ESWT.</div></div>
      <div class="refItem"><div class="refItemTitle">Weak for</div><div class="refItemBody">Partial-thickness tears (variable sensitivity), labral/deep glenohumeral pathology, and any bone assessment.</div></div>`,
  },
  {
    id: "mri", title: "MRI (plain) \u2014 soft tissue detail",
    render: () => `<div class="refItem"><div class="refItemTitle">Order for</div><div class="refItemBody">Cuff tear extent, retraction (Patte stage), and muscle quality (Goutallier grade) \u2014 essential for surgical planning once a tear is confirmed. Occult fracture not seen on X-ray. Avascular necrosis of the humeral head. Tumour/infection screening when the pain pattern is atypical (unremitting rest pain, systemic symptoms). Pre-op planning for cuff repair.</div></div>
      <div class="refItem"><div class="refItemTitle">Usually NOT needed for</div><div class="refItemBody">Adhesive capsulitis \u2014 this remains a clinical diagnosis (equal restriction of active + passive ROM on exam); imaging rarely changes management and shouldn't delay starting treatment.</div></div>`,
  },
  {
    id: "mra", title: "MRI arthrogram \u2014 labral pathology",
    render: () => `<div class="refItem"><div class="refItemBody">Contrast injected directly into the joint fills any labral tear or capsular defect, making it meaningfully more sensitive than plain MRI for this specific question.</div></div>
      <div class="refItem"><div class="refItemTitle">Order for</div><div class="refItemBody">Suspected SLAP tear when the clinical picture (positive O'Brien's + Crank test, matching history) is convincing but plain MRI was reported normal \u2014 plain MRI has a real miss rate here. Subtle capsular/HAGL lesions, especially in a patient with a failed prior Bankart repair where the glenoid side alone doesn't explain persistent instability.</div></div>`,
  },
  {
    id: "ct", title: "CT \u2014 bone detail, not soft tissue",
    render: () => `<div class="refItem"><div class="refItemTitle">Order for</div><div class="refItemBody">Glenoid bone loss quantification (%) and Hill-Sachs on-track/off-track measurement \u2014 mandatory before any instability procedure, since MRI systematically underestimates bone loss. Complex/comminuted proximal humerus fracture characterisation before ORIF planning. Pre-arthroplasty planning \u2014 Walch glenoid classification, version measurement. Suspected nonunion.</div></div>
      <div class="refItem"><div class="refItemBody">Not useful for soft-tissue pathology \u2014 don't order CT to characterise a cuff tear or labral lesion.</div></div>`,
  },
];

const imagingScenarios = [
  { scenario: "Acute trauma, ?fracture or dislocation", first: "X-ray (AP + axillary/scapular-Y) \u2014 always, before anything else." },
  { scenario: "Suspected AC joint injury", first: "Weighted AC-view X-ray, both sides for comparison." },
  { scenario: "Chronic shoulder pain, initial screening", first: "X-ray first \u2014 cheap, fast, catches arthritis/calcific deposits/AHI changes before reaching for MRI." },
  { scenario: "Suspected rotator cuff tear", first: "Ultrasound first-line (fast, dynamic, cheap) \u2014 MRI if surgical planning is needed or USG is equivocal/technically limited." },
  { scenario: "Suspected SLAP / labral tear", first: "MRI arthrogram \u2014 plain MRI is not sensitive enough to rely on if clinical suspicion is genuine." },
  { scenario: "Recurrent instability / pre-op instability planning", first: "CT for bone loss % + Hill-Sachs tracking (mandatory), MRI/MRA for labral soft-tissue detail." },
  { scenario: "Pre-op arthroplasty planning", first: "CT for Walch glenoid classification + version measurement." },
  { scenario: "Suspected AVN, occult fracture, tumour/infection", first: "MRI." },
  { scenario: "Calcific tendinitis", first: "X-ray to confirm + locate the deposit; USG to assess consistency (creamy vs chalky) before deciding barbotage vs ESWT." },
];

// ---------- WARD (brief) ----------
// ---------- SEARCH ----------
function buildSearchIndex() {
  const idx = [];
  const topicScreens = [
    { arr: conditionsTopics, screenId: "conditions", screenKey: "conditions", moduleLabel: "Conditions" },
    { arr: mriTopics, screenId: "mri", screenKey: "mri", moduleLabel: "MRI reading" },
    { arr: injectionTopics, screenId: "injections", screenKey: "injections", moduleLabel: "Injections" },
    { arr: surgicalTopics, screenId: "surgical", screenKey: "surgical", moduleLabel: "Surgical techniques" },
    { arr: arthroscopyTopics, screenId: "arthroscopy", screenKey: "arthroscopy", moduleLabel: "Arthroscopy" },
    { arr: classificationsTopics, screenId: "classifications", screenKey: "classifications", moduleLabel: "Classifications" },
    { arr: managementTopics, screenId: "management", screenKey: "management", moduleLabel: "Management protocols" },
    { arr: referenceTopics, screenId: "eponyms", screenKey: "eponyms", moduleLabel: "References" },
    { arr: imagingModalityTopics, screenId: "imaging", screenKey: "imaging", moduleLabel: "Imaging guide" },
  ];
  topicScreens.forEach((ts) => {
    ts.arr.forEach((t) => {
      idx.push({ label: t.title, moduleLabel: ts.moduleLabel, screenId: ts.screenId, screenKey: ts.screenKey, topicId: t.id });
    });
  });
  rehabOptions.forEach((o) => {
    idx.push({ label: o.label, moduleLabel: "Rehab", screenId: "postop", rehabId: o.id });
  });
  romPatterns.forEach((p) => {
    p.diagnoses.forEach((d) => {
      idx.push({ label: d.name, moduleLabel: "OPD \u2014 examination", screenId: "opd", patternId: p.id });
    });
  });
  instabilityDiagnoses.forEach((d) => {
    idx.push({ label: d.name, moduleLabel: "OPD \u2014 instability", screenId: "opd", instabilityFlag: true });
  });
  return idx;
}

function goToSearchResult(item) {
  setScreen(item.screenId);
  if (item.screenKey && item.topicId) expandedTopicByScreen[item.screenKey] = item.topicId;
  if (item.rehabId) {
    selectedRehab = item.rehabId;
    currentWeek = 0;
    selectedIrritability = null;
  }
  if (item.patternId) selectedPattern = item.patternId;
  if (item.instabilityFlag) screenState.instability = true;
  render();
}

function renderSearch() {
  screenTitle.textContent = "Search";
  const index = buildSearchIndex();
  app.innerHTML = `
    <input type="text" id="searchInput" placeholder="Search tests, conditions, protocols\u2026" autofocus
      style="width:100%;padding:12px 14px;border-radius:12px;border:1px solid var(--border);background:var(--surface);font-size:15px;margin-bottom:14px;" />
    <div id="searchResultsBox"></div>`;
  const input = document.getElementById("searchInput");
  const resultsBox = document.getElementById("searchResultsBox");

  function renderResults(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      resultsBox.innerHTML = `<div class="emptyHint">Start typing to search across every module</div>`;
      return;
    }
    const matches = index.filter((it) => it.label.toLowerCase().includes(q));
    if (matches.length === 0) {
      resultsBox.innerHTML = `<div class="emptyHint">No matches for \u201c${query}\u201d</div>`;
      return;
    }
    resultsBox.innerHTML = matches.slice(0, 40).map((m, i) => `
      <button class="testRow" data-searchidx="${i}">
        <span>${m.label}<span class="sub" style="display:block;">${m.moduleLabel}</span></span>
        <span class="chev">${ICONS.chevRight}</span>
      </button>`).join("");
    resultsBox.querySelectorAll("[data-searchidx]").forEach((btn) => {
      btn.addEventListener("click", () => {
        goToSearchResult(matches[parseInt(btn.dataset.searchidx, 10)]);
      });
    });
  }

  renderResults("");
  input.addEventListener("input", (e) => renderResults(e.target.value));
}

// ---------- HELP GUIDE ----------
const helpSections = [
  {
    title: "What this app is",
    body: "Ortho Assist is a clinical decision-support and reference tool for the OPD, ward, and OT \u2014 organised by anatomical region (Shoulder is live; more regions are planned). Content is built from a course handbook and published, evidence-based orthopaedic literature. It is designed to speed up and structure real clinical decisions, not to replace clinical judgement or a surgeon's discretion.",
  },
  {
    title: "The OPD flow \u2014 start to finish",
    body: "Open Shoulder \u2192 OPD examination. The screen is built as one continuous flow: (1) optionally expand the History checklist and Examination technique reference at the top, (2) select the patient's age bracket \u2014 it shifts the differential, (3) tick any Screening red flags, (4) select the ROM pattern found on exam (both restricted / passive full / both full / IR alone restricted), (5) each pattern shows its differentials, and each differential lists its own special tests. Tap a test's name to see how to perform it, what a positive finding looks like, and what it means. Tap the + or \u2212 button next to a test to record the actual result on your patient \u2014 this immediately narrows the working differential shown at the top and marks that diagnosis \u201cSupported\u201d or \u201cUnlikely.\u201d Once a diagnosis is Supported, a \u201c\u2192 Management\u201d button appears beneath it \u2014 tap it to see Education, Pharmacological, Rehab, Injection, and Surgery guidance for that specific diagnosis, all in one place, without leaving the screen.",
  },
  {
    title: "Recorded results and starting a new patient",
    body: "Test results you record stay on screen as you work through a consultation, but are NOT saved between browser sessions (there is currently no patient-data storage). Use the \u201cReset recorded results \u2014 new patient\u201d link at the bottom of the OPD screen before seeing your next patient.",
  },
  {
    title: "Rehab & exercise Rx",
    body: "Select a protocol (rotator cuff repair, arthroplasty, Bankart, SLAP/DTS, post-MUA, impingement, or frozen shoulder). Phase-based protocols show a week slider \u2014 drag it to the patient's current week post-op/post-injury and the relevant phase, precautions, and exercises update live. Each phase-based protocol also carries an \u201cEvidence note\u201d flagging where the timing is genuinely debated in the literature. \u201cRehab principles\u201d covers how to adapt any of these week-based frameworks to an individual patient rather than following them rigidly.",
  },
  {
    title: "Reference modules (Conditions, MRI, Injections, Classifications, Management, Surgical, Arthroscopy, References, Imaging guide)",
    body: "Each of these is a simple tap-to-expand list. Tap a topic's title to open it, tap again to close it. They're meant for quick lookup mid-consultation or mid-case, not sequential reading.",
  },
  {
    title: "Search",
    body: "The search bar on the home dashboard (and the search icon in the top bar on every other screen) searches test names, diagnoses, rehab protocols, and every reference topic across the whole app at once. Tap any result to jump straight there \u2014 if it's a reference topic, it opens already expanded; if it's an OPD diagnosis, it takes you to the OPD screen with that ROM pattern already selected.",
  },
  {
    title: "Navigation",
    body: "There's no bottom tab bar by design \u2014 use the back arrow (top-left) to go up one level, or the home icon (top-right) to jump straight back to the region-select dashboard from anywhere.",
  },
  {
    title: "A note on evidence and limitations",
    body: "Content is paraphrased from course material and published literature, not copied verbatim from any textbook. Where the evidence is genuinely mixed or protocols vary widely between institutions (e.g. shoulder arthroplasty rehab timing), the app says so explicitly rather than presenting a single number as settled fact. This app does not store any patient-identifiable information \u2014 recorded test results live only in the browser's memory for the current session.",
  },
];

// ---------- SETTINGS ----------
const textScaleOptions = [
  { id: "small", label: "Small", zoom: 1.0 },
  { id: "medium", label: "Medium", zoom: 1.12 },
  { id: "large", label: "Large", zoom: 1.28 },
];
let textScale = localStorage.getItem("orthoAssistTextScale") || "medium";

function applyTextScale() {
  const opt = textScaleOptions.find((o) => o.id === textScale) || textScaleOptions[1];
  app.style.zoom = opt.zoom;
}

const appearanceOptions = [
  { id: "light", label: "Light" },
  { id: "dark", label: "Dark" },
  { id: "auto", label: "Auto", sub: "follows your device" },
  { id: "reading", label: "Reading", sub: "warm sepia, larger line spacing" },
];
let appearance = localStorage.getItem("orthoAssistAppearance") || "auto";
const darkMediaQuery = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

function applyAppearance() {
  let effective = appearance;
  if (effective === "auto") {
    effective = darkMediaQuery && darkMediaQuery.matches ? "dark" : "light";
  }
  if (effective === "light") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", effective);
  }
}
if (darkMediaQuery) {
  darkMediaQuery.addEventListener("change", () => {
    if (appearance === "auto") applyAppearance();
  });
}

function renderSettings() {
  screenTitle.textContent = "Settings";
  let html = `<div class="sectionLabel">Appearance</div><div class="selectGrid">`;
  appearanceOptions.forEach((o) => {
    const sel = appearance === o.id ? "selected" : "";
    html += `<button class="optRow ${sel}" data-appearance="${o.id}"><span>${o.label}${o.sub ? `<span class="sub">${o.sub}</span>` : ""}</span><span class="check">${sel ? ICONS.check : ""}</span></button>`;
  });
  html += `</div>
    <div class="sectionLabel">Text size</div><div class="selectGrid">`;
  textScaleOptions.forEach((o) => {
    const sel = textScale === o.id ? "selected" : "";
    html += `<button class="optRow ${sel}" data-textscale="${o.id}"><span>${o.label}</span><span class="check">${sel ? ICONS.check : ""}</span></button>`;
  });
  html += `</div>
    <div class="disclaimer">More settings are planned here as the app grows.</div>`;
  app.innerHTML = html;
  applyTextScale();
  app.querySelectorAll("[data-textscale]").forEach((row) => {
    row.addEventListener("click", () => {
      textScale = row.dataset.textscale;
      localStorage.setItem("orthoAssistTextScale", textScale);
      renderSettings();
    });
  });
  app.querySelectorAll("[data-appearance]").forEach((row) => {
    row.addEventListener("click", () => {
      appearance = row.dataset.appearance;
      localStorage.setItem("orthoAssistAppearance", appearance);
      applyAppearance();
      renderSettings();
    });
  });
}

function renderHelp() {
  screenTitle.textContent = "How to use this app";
  let html = "";
  helpSections.forEach((s) => {
    html += `<div class="refBox" style="margin-bottom:12px;"><div class="refItem"><div class="refItemTitle" style="font-size:14.5px;">${s.title}</div><div class="refItemBody">${s.body}</div></div></div>`;
  });
  app.innerHTML = html;
}

function renderWard() {
  screenTitle.textContent = "Ward";
  const html = `
    <div class="sectionLabel">Pre-op</div>
    <div class="refBox">
      <div class="refItem"><div class="refItemBody">Consent taken, correct side marked and confirmed with the patient.</div></div>
      <div class="refItem"><div class="refItemBody">NPO status confirmed per anaesthesia timing.</div></div>
      <div class="refItem"><div class="refItemBody">Anticoagulants/antiplatelets stopped per protocol; document last dose.</div></div>
      <div class="refItem"><div class="refItemBody">Antibiotic prophylaxis timed within 60 minutes of incision.</div></div>
      <div class="refItem"><div class="refItemBody">Regional block coordinated with anaesthesia \u2014 document baseline neuro exam BEFORE the block.</div></div>
    </div>
    <div class="sectionLabel">Post-op</div>
    <div class="refBox">
      <div class="refItem"><div class="refItemBody">Neurovascular check (axillary nerve \u2014 deltoid sensation/contraction) on arrival to ward and before discharge.</div></div>
      <div class="refItem"><div class="refItemBody">Pain control \u2014 regional block wearing off is the usual pain spike; have oral analgesia bridging ready, don't wait for the patient to ask.</div></div>
      <div class="refItem"><div class="refItemBody">Sling fit and patient understanding of it confirmed before they leave the ward.</div></div>
      <div class="refItem"><div class="refItemBody">Wound/dressing checked; document any drain output.</div></div>
      <div class="refItem"><div class="refItemBody">Discharge criteria: pain controlled on oral analgesia, understands precautions for the specific procedure (see Rehab), follow-up appointment booked.</div></div>
    </div>
    <div class="disclaimer">Deliberately brief \u2014 adapt to local ward protocol.</div>`;
  app.innerHTML = html;
}

function renderImagingGuide() {
  screenTitle.textContent = "Imaging guide";
  let html = `<p style="font-size:13px;color:var(--text-2);margin-bottom:14px;">By modality, then a quick scenario lookup</p>`;
  imagingModalityTopics.forEach((t) => {
    const open = expandedTopicByScreen.imaging === t.id;
    html += `<button class="testRow" data-imgtopic="${t.id}"><span>${t.title}</span><span class="chev">${open ? "\u2212" : "+"}</span></button>`;
    if (open) html += `<div class="refBox">${t.render()}</div>`;
  });
  html += `<div class="sectionLabel">Quick scenario lookup</div>`;
  imagingScenarios.forEach((s) => {
    html += `<div class="refItem"><div class="refItemTitle">${s.scenario}</div><div class="refItemBody">${s.first}</div></div>`;
  });
  html += `<div class="disclaimer">Built to consolidate imaging-ordering logic scattered across Conditions, MRI reading, and Classifications into one place. Correlate with local availability and radiologist input \u2014 not a substitute for clinical judgement.</div>`;
  app.innerHTML = html;
  app.querySelectorAll("[data-imgtopic]").forEach((row) => {
    row.addEventListener("click", () => {
      const id = row.dataset.imgtopic;
      expandedTopicByScreen.imaging = expandedTopicByScreen.imaging === id ? null : id;
      renderImagingGuide();
    });
  });
}

let expandedTopicByScreen = { conditions: null, mri: null, injections: null, surgical: null, arthroscopy: null, classifications: null, management: null, imaging: null };

function renderTopicScreen(topics, screenKey, title) {
  screenTitle.textContent = title;
  let html = `<p style="font-size:13px;color:var(--text-2);margin-bottom:14px;">Tap a topic to expand</p>`;
  topics.forEach((t) => {
    const open = expandedTopicByScreen[screenKey] === t.id;
    html += `<button class="testRow" data-topic="${t.id}"><span>${t.title}</span><span class="chev">${open ? "\u2212" : "+"}</span></button>`;
    if (open) html += `<div class="refBox">${t.render()}</div>`;
  });
  html += `<div class="disclaimer">Built from the course handbook. Correlate with full clinical picture \u2014 not a substitute for surgeon discretion.</div>`;
  app.innerHTML = html;
  app.querySelectorAll("[data-topic]").forEach((row) => {
    row.addEventListener("click", () => {
      const id = row.dataset.topic;
      expandedTopicByScreen[screenKey] = expandedTopicByScreen[screenKey] === id ? null : id;
      render();
    });
  });
}
let currentScreen = "app-home";
const screenState = {};
let selectedPattern = null;
const expandedTests = new Set();
const testResults = {}; // testKey -> 'pos' | 'neg'

function diagnosisStatus(tests, keys) {
  if (tests.length === 0) return null;
  let anyPos = false;
  let testedCount = 0;
  keys.forEach((k) => {
    const r = testResults[k];
    if (r) testedCount++;
    if (r === "pos") anyPos = true;
  });
  if (anyPos) return "supported";
  if (testedCount === keys.length && testedCount > 0) return "unlikely";
  return null;
}
let showTenderness = false;
let showSubscap = false;
let showExamTech = false;
let showHistoryChecklist = false;

let selectedRehab = null; // 'bankart' | 'slap_dts' | 'impingement' | 'frozen'
let selectedSurgery = null;
let currentWeek = 0;
let selectedIrritability = null;

// ---------- RENDER ----------
const app = document.getElementById("app");
const screenTitle = document.getElementById("screenTitle");
const backBtn = document.getElementById("backBtn");
const homeBtn = document.getElementById("homeBtn");
const searchBtn = document.getElementById("searchBtn");

let screenStack = ["app-home"];

function setScreen(name) {
  screenStack.push(name);
  currentScreen = name;
  updateNavChrome();
  render();
  window.scrollTo(0, 0);
}

function goBack() {
  if (screenStack.length > 1) screenStack.pop();
  currentScreen = screenStack[screenStack.length - 1];
  updateNavChrome();
  render();
  window.scrollTo(0, 0);
}

function goHome() {
  screenStack = ["app-home"];
  currentScreen = "app-home";
  updateNavChrome();
  render();
  window.scrollTo(0, 0);
}

function updateNavChrome() {
  backBtn.hidden = screenStack.length <= 1;
  homeBtn.hidden = currentScreen === "app-home";
}

backBtn.addEventListener("click", goBack);
homeBtn.addEventListener("click", goHome);
searchBtn.addEventListener("click", () => setScreen("search"));

function render() {
  if (currentScreen === "app-home") renderAppHome();
  else if (currentScreen === "home") renderHome();
  else if (currentScreen === "opd") renderOpd();
  else if (currentScreen === "postop") renderPostop();
  else if (currentScreen === "conditions") renderTopicScreen(conditionsTopics, "conditions", "Conditions");
  else if (currentScreen === "mri") renderTopicScreen(mriTopics, "mri", "MRI reading");
  else if (currentScreen === "injections") renderTopicScreen(injectionTopics, "injections", "Injections");
  else if (currentScreen === "surgical") renderTopicScreen(surgicalTopics, "surgical", "Surgical techniques");
  else if (currentScreen === "arthroscopy") renderTopicScreen(arthroscopyTopics, "arthroscopy", "Arthroscopy");
  else if (currentScreen === "eponyms") renderTopicScreen(referenceTopics, "eponyms", "References");
  else if (currentScreen === "management") renderTopicScreen(managementTopics, "management", "Management protocols");
  else if (currentScreen === "imaging") renderImagingGuide();
  else if (currentScreen === "ward") renderWard();
  else if (currentScreen === "search") renderSearch();
  else if (currentScreen === "help") renderHelp();
  else if (currentScreen === "settings") renderSettings();
  else if (currentScreen === "classifications") renderTopicScreen(classificationsTopics, "classifications", "Classifications");
}

const regions = [
  { id: "shoulder", name: "Shoulder", desc: "OPD, rehab, conditions, MRI, injections, OT", status: "active" },
  { id: "spine", name: "Spine \u2014 LBP & Trauma", desc: "Next module", status: "soon" },
  { id: "cervical", name: "Cervical spine", desc: "Planned", status: "soon" },
  { id: "footankle", name: "Foot & ankle", desc: "Planned", status: "soon" },
];

function renderAppHome() {
  screenTitle.textContent = "";
  let html = `
    <div class="brandHero">
      <img src="icons/icon-512.png" alt="Ortho Assist logo" />
      <h1>Ortho Assist</h1>
      <div class="tagline">Diagnose &middot; Plan &middot; Treat &middot; Recover</div>
    </div>
    <div class="searchBar">
      ${ICONS.searchSmall}
      <input type="text" id="homeSearchInput" placeholder="Search tests, conditions, protocols\u2026" />
    </div>
    <div id="homeSearchResultsBox"></div>
    <div id="homeRegionsBox">
      <div class="sectionLabel">Regions</div>`;
  regions.forEach((r) => {
    if (r.status === "active") {
      html += `
        <button class="homeCard c-teal" data-region="${r.id}">
          <div class="iconBadge">${ICONS.bodyFigure}</div>
          <div style="flex:1;">
            <div class="title">${r.name}</div>
            <div class="desc">${r.desc}</div>
          </div>
          <div class="chev">${ICONS.chevRight}</div>
        </button>`;
    } else {
      html += `
        <div class="card" style="opacity:.5;box-shadow:none;display:flex;align-items:center;gap:14px;">
          <div class="iconBadge" style="background:var(--surface-2);color:var(--text-3);">${ICONS.info}</div>
          <div>
            <div style="font-weight:700;font-size:15px;margin-bottom:2px;">${r.name}</div>
            <div style="font-size:12.5px;color:var(--text-2);">${r.desc}</div>
          </div>
        </div>`;
    }
  });
  html += `</div>
    <button class="homeCard c-amber" id="goHelp" style="margin-top:6px;">
      <div class="iconBadge">${ICONS.info}</div>
      <div style="flex:1;">
        <div class="title">How to use this app</div>
        <div class="desc">Quick guide to the OPD flow, Rehab trackers, and search</div>
      </div>
      <div class="chev">${ICONS.chevRight}</div>
    </button>
    <button class="homeCard c-amber" id="goSettings">
      <div class="iconBadge">${ICONS.grid}</div>
      <div style="flex:1;">
        <div class="title">Settings</div>
        <div class="desc">Appearance (light/dark/auto/reading) and text size</div>
      </div>
      <div class="chev">${ICONS.chevRight}</div>
    </button>`;
  app.innerHTML = html;
  app.querySelectorAll("[data-region]").forEach((btn) => {
    btn.addEventListener("click", () => setScreen("home"));
  });
  document.getElementById("goHelp").addEventListener("click", () => setScreen("help"));
  document.getElementById("goSettings").addEventListener("click", () => setScreen("settings"));

  const index = buildSearchIndex();
  const input = document.getElementById("homeSearchInput");
  const resultsBox = document.getElementById("homeSearchResultsBox");
  const regionsBox = document.getElementById("homeRegionsBox");

  function renderHomeResults(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      resultsBox.innerHTML = "";
      regionsBox.style.display = "";
      return;
    }
    regionsBox.style.display = "none";
    const matches = index.filter((it) => it.label.toLowerCase().includes(q));
    if (matches.length === 0) {
      resultsBox.innerHTML = `<div class="emptyHint">No matches for \u201c${query}\u201d</div>`;
      return;
    }
    resultsBox.innerHTML = matches.slice(0, 30).map((m, i) => `
      <button class="testRow" data-searchidx="${i}">
        <span>${m.label}<span class="sub" style="display:block;">${m.moduleLabel}</span></span>
        <span class="chev">${ICONS.chevRight}</span>
      </button>`).join("");
    resultsBox.querySelectorAll("[data-searchidx]").forEach((btn) => {
      btn.addEventListener("click", () => {
        goToSearchResult(matches[parseInt(btn.dataset.searchidx, 10)]);
      });
    });
  }
  input.addEventListener("input", (e) => renderHomeResults(e.target.value));
}

function renderHome() {
  screenTitle.textContent = "Shoulder";
  app.innerHTML = `
    <div class="homeHero">
      <h2 style="font-weight:800;">Shoulder</h2>
      <p>Evidence-based logic, built for the OPD, ward and OT.</p>
    </div>
    <div class="sectionLabel">Clinical workflow</div>
    <button class="homeCard c-teal" id="goOpd">
      <div class="iconBadge">${ICONS.stethoscope}</div>
      <div style="flex:1;">
        <div class="title">OPD examination</div>
        <div class="desc">Red flags \u2192 ROM-pattern algorithm \u2192 special tests</div>
      </div>
      <div class="chev">${ICONS.chevRight}</div>
    </button>
    <button class="homeCard c-teal" id="goPostop">
      <div class="iconBadge">${ICONS.dumbbell}</div>
      <div style="flex:1;">
        <div class="title">Rehab & exercise Rx</div>
        <div class="desc">Bankart, SLAP/DTS, impingement, frozen shoulder</div>
      </div>
      <div class="chev">${ICONS.chevRight}</div>
    </button>
    <div class="sectionLabel">Reference library</div>
    <button class="homeCard c-amber" id="goConditions">
      <div class="iconBadge">${ICONS.bodyFigure}</div>
      <div style="flex:1;">
        <div class="title">Conditions</div>
        <div class="desc">Bankart variants, CTA, instability matrix, barbotage, LPD</div>
      </div>
      <div class="chev">${ICONS.chevRight}</div>
    </button>
    <button class="homeCard c-amber" id="goMri">
      <div class="iconBadge">${ICONS.layers}</div>
      <div style="flex:1;">
        <div class="title">MRI reading</div>
        <div class="desc">Signal rules, magic angle, axial/sagittal/coronal checklists</div>
      </div>
      <div class="chev">${ICONS.chevRight}</div>
    </button>
    <button class="homeCard c-amber" id="goInjections">
      <div class="iconBadge">${ICONS.syringe}</div>
      <div style="flex:1;">
        <div class="title">Injections</div>
        <div class="desc">Steroid choice, needle technique, condition\u2192space matching</div>
      </div>
      <div class="chev">${ICONS.chevRight}</div>
    </button>
    <button class="homeCard c-amber" id="goClassifications">
      <div class="iconBadge">${ICONS.grid}</div>
      <div style="flex:1;">
        <div class="title">Classifications</div>
        <div class="desc">Neer (proximal humerus #), Rockwood (AC joint), Walch (glenoid)</div>
      </div>
      <div class="chev">${ICONS.chevRight}</div>
    </button>
    <button class="homeCard c-amber" id="goManagement">
      <div class="iconBadge">${ICONS.route}</div>
      <div style="flex:1;">
        <div class="title">Management protocols</div>
        <div class="desc">Full conservative\u2192surgical pathway: cuff tear, AC injury, instability, calcific tendinitis</div>
      </div>
      <div class="chev">${ICONS.chevRight}</div>
    </button>
    <button class="homeCard c-amber" id="goImaging">
      <div class="iconBadge">${ICONS.imageScan}</div>
      <div style="flex:1;">
        <div class="title">Imaging guide</div>
        <div class="desc">X-ray vs USG vs MRI vs CT \u2014 by modality and by clinical scenario</div>
      </div>
      <div class="chev">${ICONS.chevRight}</div>
    </button>
    <div class="sectionLabel">OT reference</div>
    <button class="homeCard c-amber" id="goSurgical">
      <div class="iconBadge">${ICONS.scalpel}</div>
      <div style="flex:1;">
        <div class="title">Surgical techniques</div>
        <div class="desc">Latarjet, glenoplasty, RC repair, tenodesis, knots, portals</div>
      </div>
      <div class="chev">${ICONS.chevRight}</div>
    </button>
    <button class="homeCard c-amber" id="goArthroscopy">
      <div class="iconBadge">${ICONS.scope}</div>
      <div style="flex:1;">
        <div class="title">Arthroscopy</div>
        <div class="desc">SCOI 15-point survey, portals, normal variants</div>
      </div>
      <div class="chev">${ICONS.chevRight}</div>
    </button>
    <button class="homeCard c-amber" id="goEponyms">
      <div class="iconBadge">${ICONS.book}</div>
      <div style="flex:1;">
        <div class="title">References</div>
        <div class="desc">Must-read papers + eponym lookup</div>
      </div>
      <div class="chev">${ICONS.chevRight}</div>
    </button>
    <button class="homeCard c-teal" id="goWard">
      <div class="iconBadge">${ICONS.book}</div>
      <div style="flex:1;">
        <div class="title">Ward</div>
        <div class="desc">Brief pre-op and post-op checkpoints</div>
      </div>
      <div class="chev">${ICONS.chevRight}</div>
    </button>
    <div class="sectionLabel">Coming soon</div>
    <div class="card" style="opacity:.5;box-shadow:none;">
      <div style="font-weight:700;font-size:14px;margin-bottom:2px;">Spine \u2014 LBP & Trauma</div>
      <div style="font-size:12.5px;color:var(--text-2);">Next module</div>
    </div>
  `;
  document.getElementById("goOpd").addEventListener("click", () => setScreen("opd"));
  document.getElementById("goPostop").addEventListener("click", () => setScreen("postop"));
  document.getElementById("goConditions").addEventListener("click", () => setScreen("conditions"));
  document.getElementById("goMri").addEventListener("click", () => setScreen("mri"));
  document.getElementById("goInjections").addEventListener("click", () => setScreen("injections"));
  document.getElementById("goClassifications").addEventListener("click", () => setScreen("classifications"));
  document.getElementById("goManagement").addEventListener("click", () => setScreen("management"));
  document.getElementById("goImaging").addEventListener("click", () => setScreen("imaging"));
  document.getElementById("goWard").addEventListener("click", () => setScreen("ward"));
  document.getElementById("goSurgical").addEventListener("click", () => setScreen("surgical"));
  document.getElementById("goArthroscopy").addEventListener("click", () => setScreen("arthroscopy"));
  document.getElementById("goEponyms").addEventListener("click", () => setScreen("eponyms"));
}

function renderOpd() {
  screenTitle.textContent = "OPD triage";
  let html = "";

  // History checklist — the full systematic sequence
  html += `<button class="refToggle" data-ref="historychecklist"><span>${showHistoryChecklist ? "\u2212" : "+"} History checklist \u2014 full sequence</span></button>`;
  if (showHistoryChecklist) {
    html += `<div class="refBox">${renderHistoryChecklist()}</div>`;
  }

  // Examination technique — the practical how/where walkthrough
  html += `<button class="refToggle" data-ref="examtech"><span>${showExamTech ? "\u2212" : "+"} Examination technique \u2014 the sequence</span></button>`;
  if (showExamTech) {
    html += `<div class="refBox">${renderExamSteps()}</div>`;
  }

  // Age bracket — shifts the differential per the handbook's own teaching
  html += `<div class="sectionLabel">Age bracket</div><div class="selectGrid">`;
  ageGroups.forEach((a) => {
    const sel = screenState.age === a.id ? "selected" : "";
    html += `
      <button class="optRow ${sel}" data-age="${a.id}">
        <span>${a.label}</span>
        <span class="check">${sel ? ICONS.check : ""}</span>
      </button>`;
  });
  html += `</div>`;
  if (screenState.age) {
    const a = ageGroups.find((x) => x.id === screenState.age);
    html += `<div class="refBox" style="margin-bottom:16px;"><div class="refItem"><div class="refItemBody">${a.note}</div></div></div>`;
  }

  // Step 1 — screening flags
  html += `<div class="sectionLabel">1 \u00b7 Screening</div><div class="selectGrid">`;
  screenFlags.forEach((it) => {
    const sel = screenState[it.id] ? "selected" : "";
    html += `
      <button class="optRow ${sel}" data-flag="${it.id}">
        <span>${it.text}${it.sub ? `<span class="sub">${it.sub}</span>` : ""}</span>
        <span class="check">${sel ? ICONS.check : ""}</span>
      </button>`;
  });
  html += `</div>`;

  const rf = computeRedFlag(screenState);
  if (rf) {
    html += `<div class="resultBox flag-${rf.flag}"><div class="boxHead">${flagIcon(rf.flag)}<div class="value" style="margin-bottom:0;">${rf.title}</div></div><div class="body" style="margin-top:8px;">${rf.body}</div></div>`;
  }

  // Reference toggles
  html += `
    <div class="sectionLabel">Routine reference</div>
    <button class="refToggle" data-ref="tenderness">${showTenderness ? "\u2212" : "+"} 3-point tenderness routine</button>`;
  if (showTenderness) {
    html += `<div class="refBox">`;
    threePointTenderness.forEach((t) => {
      html += `<div class="refItem"><div class="refItemTitle">${t.point}</div><div class="refItemBody"><b>Locate:</b> ${t.locate}<br><b>Suggests:</b> ${t.suggests}<br><b>Confirm with:</b> ${t.confirm}</div></div>`;
    });
    html += `</div>`;
  }
  html += `<button class="refToggle" data-ref="subscap">${showSubscap ? "\u2212" : "+"} Subscapularis \u2014 3 tests</button>`;
  if (showSubscap) {
    html += `<div class="refBox">`;
    subscapTests.forEach((t) => {
      html += `<div class="refItem"><div class="refItemTitle">${t.name} <span class="sub">\u2014 ${t.fibers}</span></div><div class="refItemBody"><b>How:</b> ${t.how}<br><b>Positive:</b> ${t.positive}</div></div>`;
    });
    html += `<div class="refItem"><div class="refItemBody"><b>All 3 positive</b> = complete tear. <b>Bear Hug alone positive</b> = isolated upper subscapularis tear \u2014 the most common, most overlooked pattern.</div></div>`;
    html += `</div>`;
  }

  // Step 2 — ROM pattern
  html += `<div class="sectionLabel">2 \u00b7 ROM pattern (assess supine)</div><div class="selectGrid">`;
  romPatterns.forEach((p) => {
    const sel = selectedPattern === p.id ? "selected" : "";
    html += `
      <button class="optRow ${sel}" data-pattern="${p.id}">
        <span>${p.label}<span class="sub">${p.short}</span></span>
        <span class="check">${sel ? ICONS.check : ""}</span>
      </button>`;
  });
  html += `</div>`;

  if (selectedPattern) {
    const p = romPatterns.find((x) => x.id === selectedPattern);
    const ageNote = screenState.age ? ageGroups.find((x) => x.id === screenState.age) : null;
    html += `
      <div class="resultBox flag-${p.flag}">
        <div class="boxHead">${flagIcon(p.flag)}<div class="label" style="margin-bottom:0;">Differentials for this pattern</div></div>
        ${ageNote ? `<div class="row"><div class="label">Age context (${ageNote.label})</div><div class="body">${ageNote.note}</div></div>` : ""}
        <div class="row">
          <div class="label">Next step</div>
          <div class="body">${p.nextStep}</div>
        </div>
      </div>`;
    html += renderWorkingDifferential(p.diagnoses.map((d, di) => ({ d, keyPrefix: p.id, di })));
    p.diagnoses.forEach((d, di) => {
      html += renderDiagnosisBlock(d, p.id, di);
    });
  } else {
    html += `<div class="emptyHint">Select a ROM pattern to see differentials and their tests</div>`;
  }

  // Instability — shown whenever flagged in screening, independent of ROM pattern
  if (screenState.instability) {
    html += `<div class="sectionLabel">Instability \u2014 direction-specific tests</div>
      <div class="refBox"><div class="refItem"><div class="refItemBody">History of recurrent dislocation/apprehension splits into direction-specific testing \u2014 this changes the surgical procedure entirely, so don't skip straight to a generic diagnosis.</div></div></div>`;
    html += renderWorkingDifferential(instabilityDiagnoses.map((d, di) => ({ d, keyPrefix: "instab", di })));
    instabilityDiagnoses.forEach((d, di) => {
      html += renderDiagnosisBlock(d, "instab", di);
    });
  }

  html += `<div style="text-align:center; margin-top:10px;"><button class="resetLink" id="resetResults">Reset recorded results \u2014 new patient</button></div>`;
  html += `<div class="disclaimer">Built from the course handbook's examination framework, restructured with each test tied to the specific differential it confirms. Correlate with full clinical judgement \u2014 not a substitute for surgeon discretion.</div>`;

  app.innerHTML = html;

  app.querySelectorAll("[data-flag]").forEach((row) => {
    row.addEventListener("click", () => {
      screenState[row.dataset.flag] = !screenState[row.dataset.flag];
      renderOpd();
    });
  });
  app.querySelectorAll("[data-age]").forEach((row) => {
    row.addEventListener("click", () => {
      screenState.age = screenState.age === row.dataset.age ? null : row.dataset.age;
      renderOpd();
    });
  });
  app.querySelectorAll("[data-pattern]").forEach((row) => {
    row.addEventListener("click", () => {
      selectedPattern = row.dataset.pattern;
      renderOpd();
    });
  });
  app.querySelectorAll("[data-testkey]").forEach((row) => {
    row.addEventListener("click", () => {
      const k = row.dataset.testkey;
      if (expandedTests.has(k)) expandedTests.delete(k);
      else expandedTests.add(k);
      renderOpd();
    });
  });
  app.querySelectorAll("[data-result]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const k = btn.dataset.key;
      const val = btn.dataset.result;
      testResults[k] = testResults[k] === val ? undefined : val;
      renderOpd();
    });
  });
  const resetBtn = document.getElementById("resetResults");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      Object.keys(testResults).forEach((k) => delete testResults[k]);
      renderOpd();
    });
  }
  app.querySelectorAll("[data-ref]").forEach((row) => {
    row.addEventListener("click", () => {
      if (row.dataset.ref === "tenderness") showTenderness = !showTenderness;
      else if (row.dataset.ref === "subscap") showSubscap = !showSubscap;
      else if (row.dataset.ref === "examtech") showExamTech = !showExamTech;
      else if (row.dataset.ref === "historychecklist") showHistoryChecklist = !showHistoryChecklist;
      renderOpd();
    });
  });
}

const rehabOptions = [
  { id: "cuff_small", label: "Rotator cuff repair \u2014 small/medium tear", kind: "phase" },
  { id: "cuff_large", label: "Rotator cuff repair \u2014 large/massive tear", kind: "phase" },
  { id: "arthroplasty", label: "Shoulder arthroplasty (TSA/RSA)", kind: "phase" },
  { id: "bankart", label: "Post-Bankart stabilisation", kind: "phase" },
  { id: "slap_dts", label: "SLAP / disabled throwing shoulder", kind: "phase" },
  { id: "mua_release", label: "Post-MUA / capsular release", kind: "phase" },
  { id: "impingement", label: "External impingement \u2014 exercise Rx", kind: "static" },
  { id: "frozen", label: "Adhesive capsulitis \u2014 stretching programme", kind: "irritability" },
  { id: "principles", label: "Rehab principles \u2014 evidence-based", kind: "principles" },
];

function renderPostop() {
  screenTitle.textContent = "Rehab & exercise Rx";
  let html = `<div class="sectionLabel">Protocol</div><div class="selectGrid">`;
  rehabOptions.forEach((o) => {
    const sel = selectedRehab === o.id ? "selected" : "";
    html += `<button class="optRow ${sel}" data-rehab="${o.id}"><span>${o.label}</span><span class="check">${sel ? ICONS.check : ""}</span></button>`;
  });
  html += `</div>`;

  if (!selectedRehab) {
    html += `<div class="emptyHint">Select a protocol above</div>`;
    app.innerHTML = html;
    bindRehabHandlers();
    return;
  }

  if (phaseSurgeries[selectedRehab]) {
    const s = phaseSurgeries[selectedRehab];
    if (currentWeek > s.maxWeek) currentWeek = s.maxWeek;
    const phase = s.phases.find((p) => currentWeek >= p.from && currentWeek <= p.to) || s.phases[s.phases.length - 1];
    html += `<div class="sectionLabel">Weeks since surgery</div>`;
    if (s.evidenceNote) {
      html += `<div class="refBox"><div class="refItem"><div class="refItemTitle">Evidence note</div><div class="refItemBody">${s.evidenceNote}</div></div></div>`;
    }
    html += `
      <div class="sliderRow">
        <input type="range" id="weekSlider" min="0" max="${s.maxWeek}" step="1" value="${currentWeek}">
        <span class="weekOut" id="weekOut">Week ${currentWeek}</span>
      </div>
      <div class="resultBox flag-teal" id="phaseBox">
        <span class="phaseChip">${phase.title}</span>
        <div class="body"><ul class="bulletList">${phase.points.map((p) => `<li>${p}</li>`).join("")}</ul></div>
      </div>
      <div class="disclaimer">Timeline-based staging \u2014 adjust to surgeon-specific instructions and individual healing. See Rehab Principles for how to apply this framework rather than following it rigidly.</div>`;
  }

  if (selectedRehab === "impingement") {
    html += `
      <div class="resultBox flag-amber">
        <div class="label">Medication</div>
        <div class="body">${impingementRx.meds}</div>
      </div>
      <div class="sectionLabel">Exercise groups</div>`;
    impingementRx.groups.forEach((g) => {
      html += `<div class="refBox"><div class="refItem"><div class="refItemTitle">${g.muscle}</div><div class="refItemBody">${g.exercises}</div></div></div>`;
    });
    html += `
      <div class="resultBox flag-red">
        <div class="label">Do NOT strengthen</div>
        <div class="body">${impingementRx.dontStrengthen}</div>
      </div>
      <div class="resultBox flag-teal">
        <div class="label">Skip these modalities</div>
        <div class="body">${impingementRx.avoid}</div>
      </div>
      <div class="disclaimer">${impingementRx.timeline}</div>`;
  }

  if (selectedRehab === "frozen") {
    html += `<div class="sectionLabel">Irritability level</div><div class="selectGrid">`;
    Object.keys(frozenShoulderLevels).forEach((k) => {
      const sel = selectedIrritability === k ? "selected" : "";
      html += `<button class="optRow ${sel}" data-irr="${k}"><span>${frozenShoulderLevels[k].label}<span class="sub">${frozenShoulderLevels[k].def}</span></span><span class="check">${sel ? ICONS.check : ""}</span></button>`;
    });
    html += `</div>`;
    if (selectedIrritability) {
      const l = frozenShoulderLevels[selectedIrritability];
      html += `
        <div class="resultBox flag-teal">
          <div class="row"><div class="label">Injection</div><div class="body">${l.injection}</div></div>
          <div class="row"><div class="label">Physiotherapy approach</div><div class="body">${l.pt}</div></div>
        </div>`;
    }
    html += `<div class="sectionLabel">Stretching programme</div>`;
    frozenStretches.forEach((s) => {
      html += `<div class="refBox"><div class="refItem"><div class="refItemTitle">${s.name}</div><div class="refItemBody">${s.how}<br><b>Priority:</b> ${s.priority}</div></div></div>`;
    });
    html += `<div class="disclaimer">Passive stretching outperforms active in adhesive capsulitis \u2014 active movement triggers guarding that limits true capsular stretch. Apply heat ~10 min before stretching. Consistency beats intensity.</div>`;
  }

  if (selectedRehab === "principles") {
    html += `<div class="sectionLabel">Core principles</div>`;
    rehabPrinciples.forEach((p) => {
      html += `<div class="refBox"><div class="refItem"><div class="refItemTitle">${p.title}</div><div class="refItemBody">${p.body}</div></div></div>`;
    });
    html += `<div class="disclaimer">These apply across all protocols above \u2014 use them to adapt the week-based phases to the individual patient rather than following them rigidly.</div>`;
  }

  app.innerHTML = html;
  bindRehabHandlers();
}

function bindRehabHandlers() {
  app.querySelectorAll("[data-rehab]").forEach((row) => {
    row.addEventListener("click", () => {
      selectedRehab = row.dataset.rehab;
      currentWeek = 0;
      selectedIrritability = null;
      renderPostop();
    });
  });
  app.querySelectorAll("[data-irr]").forEach((row) => {
    row.addEventListener("click", () => {
      selectedIrritability = row.dataset.irr;
      renderPostop();
    });
  });
  const slider = document.getElementById("weekSlider");
  if (slider) {
    slider.addEventListener("input", (e) => {
      currentWeek = parseInt(e.target.value, 10);
      document.getElementById("weekOut").textContent = "Week " + currentWeek;
      const s = phaseSurgeries[selectedRehab];
      const phase = s.phases.find((p) => currentWeek >= p.from && currentWeek <= p.to) || s.phases[s.phases.length - 1];
      document.getElementById("phaseBox").innerHTML = `
        <span class="phaseChip">${phase.title}</span>
        <div class="body"><ul class="bulletList">${phase.points.map((p) => `<li>${p}</li>`).join("")}</ul></div>`;
    });
  }
}

// ---------- INIT ----------
applyAppearance();
applyTextScale();
render();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
