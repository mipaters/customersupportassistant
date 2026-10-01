const scenarios = {
  combined: {
    id: "OC-24081",
    plan: "Fibre 1 Gig + Home Wi-Fi",
    bill: "$164.32",
    billChange: "↑ $23.00 this month",
    network: "Needs attention",
    networkDetail: "Intermittent dropouts",
    opening: "Sarah reached out about a bill increase—and mentions her home internet has been unreliable too.",
    messages: [
      { role: "customer", text: "Hi, my bill is $23 higher this month, and my Wi-Fi has been dropping during video calls. Can someone help with both?" },
      { role: "assistant", text: "Absolutely, Sarah. I’ll look at the bill change and your connection together so you don’t have to repeat yourself. I’m checking the recent account and service details now.", note: "Unified support assistant · Customer context connected" },
      { role: "assistant", text: "I found two separate causes. Your $20 promotional discount ended on September 1. Your connection has also seen intermittent signal drops since yesterday—there’s no neighborhood outage.", note: "Billing specialist + network operations agent · Findings grounded in account and service data" },
      { role: "assistant", text: "I can restore a $15 monthly loyalty discount for 12 months, bringing your bill to $149.32. For the Wi-Fi issue, I can refresh your gateway remotely and run a quick connection test. Would you like me to do both?", note: "Resolution agent · Customer approval required before account or network action" },
      { role: "customer", text: "Yes, please. Thank you for explaining it all in one place." },
      { role: "assistant", text: "Done. Your new estimated monthly bill is $149.32, and the gateway refresh restored a stable connection. I’ve documented both resolutions in case OC-24081 and sent you a summary.", note: "Actions confirmed · Connection verified · Case summary created" },
    ],
    signals: [
      { icon: "$", kind: "", text: "Promotion ended Sep 1", time: "Billing" },
      { icon: "⌁", kind: "network", text: "Signal drops since yesterday", time: "Network" },
      { icon: "◷", kind: "neutral", text: "No active area outage", time: "Service" },
    ],
    agents: [
      { icon: "✳", name: "Conversation orchestrator", role: "Understands the request · coordinates work", activeAt: 0 },
      { icon: "◎", name: "Customer context", role: "Account, plan and recent contacts", activeAt: 1 },
      { icon: "$", name: "Billing intelligence", role: "Charge explanation · eligible offers", activeAt: 2 },
      { icon: "⌁", name: "Network diagnostics", role: "Service health · gateway telemetry", activeAt: 2 },
      { icon: "✣", name: "Resolution & case agent", role: "Approval, actions and case notes", activeAt: 3 },
    ],
  },
  billing: {
    id: "OC-24082",
    plan: "Fibre 1 Gig + Home Wi-Fi",
    bill: "$164.32",
    billChange: "↑ $23.00 this month",
    network: "Online",
    networkDetail: "Service operating normally",
    opening: "Sarah noticed her bill increased by $23 and wants a clear explanation before changing her plan.",
    messages: [
      { role: "customer", text: "My bill went up by $23 this month. I haven’t changed anything—can you explain what I’m paying for?" },
      { role: "assistant", text: "I can help with that. I’ll compare this statement with your last one and trace the change to the individual charges.", note: "Conversation orchestrator · Billing request identified" },
      { role: "assistant", text: "Your base plan stayed the same. The $23 difference is the $20 promotional discount that ended September 1, plus $3 in tax. There are no new fees or equipment charges.", note: "Billing intelligence agent · Current and prior statements compared" },
      { role: "assistant", text: "I found a $15 monthly loyalty discount available for 12 months. If you approve, your new estimated bill will be $149.32. Would you like me to apply it?", note: "Offer guidance agent · Eligibility checked against account" },
      { role: "customer", text: "Yes, apply that, please." },
      { role: "assistant", text: "The discount is active. Your new estimated monthly bill is $149.32. I’ve saved the explanation and confirmation to case OC-24082 and sent you a copy.", note: "Customer-approved action · Case summary created" },
    ],
    signals: [
      { icon: "$", kind: "", text: "Promotion ended Sep 1", time: "Billing" },
      { icon: "✓", kind: "network", text: "No unrecognized charges", time: "Verified" },
      { icon: "◷", kind: "neutral", text: "Eligible loyalty offer found", time: "Options" },
    ],
    agents: [
      { icon: "✳", name: "Conversation orchestrator", role: "Understands the request · coordinates work", activeAt: 0 },
      { icon: "◎", name: "Customer context", role: "Account, plan and recent contacts", activeAt: 1 },
      { icon: "$", name: "Billing intelligence", role: "Statement comparison · charge explanation", activeAt: 2 },
      { icon: "◇", name: "Offer guidance", role: "Eligibility · plan and savings options", activeAt: 3 },
      { icon: "✣", name: "Resolution & case agent", role: "Approval, actions and case notes", activeAt: 4 },
    ],
  },
  network: {
    id: "OC-24083",
    plan: "Fibre 1 Gig + Home Wi-Fi",
    bill: "$141.32",
    billChange: "No change this month",
    network: "Unstable",
    networkDetail: "Gateway signal fluctuations",
    opening: "Sarah's video calls keep dropping. Support should diagnose the home connection before recommending a visit.",
    messages: [
      { role: "customer", text: "My Wi-Fi keeps dropping during video calls, mostly in the afternoon. Can you check what’s going on?" },
      { role: "assistant", text: "I’m sorry that’s interrupting your calls. I’ll check the service status and gateway readings first, then we can try a fix together.", note: "Conversation orchestrator · Home connectivity issue identified" },
      { role: "assistant", text: "Your fibre service is online and there’s no area outage. The gateway reports an unstable Wi-Fi channel with elevated interference. Your account and equipment are otherwise in good standing.", note: "Network operations + device analytics agents · Service and gateway telemetry checked" },
      { role: "assistant", text: "I can switch the gateway to a clearer Wi-Fi channel and refresh the connection. It may pause your Wi-Fi for about a minute. Shall I go ahead?", note: "Troubleshooting agent · Remote action described before approval" },
      { role: "customer", text: "Yes, go ahead. I can wait a minute." },
      { role: "assistant", text: "The channel has been optimized. I ran a connection test and your Wi-Fi is stable again. I’ve saved the steps and test result to case OC-24083.", note: "Customer-approved fix · Post-action connection test passed" },
    ],
    signals: [
      { icon: "⌁", kind: "network", text: "Wi-Fi interference elevated", time: "Gateway" },
      { icon: "✓", kind: "network", text: "Fibre service online", time: "Verified" },
      { icon: "◷", kind: "neutral", text: "No area outage detected", time: "Service" },
    ],
    agents: [
      { icon: "✳", name: "Conversation orchestrator", role: "Understands the request · coordinates work", activeAt: 0 },
      { icon: "◎", name: "Customer context", role: "Equipment, plan and previous issues", activeAt: 1 },
      { icon: "⌁", name: "Network operations", role: "Service status · fibre and gateway signals", activeAt: 2 },
      { icon: "◉", name: "Device analytics", role: "Wi-Fi channel · interference · device health", activeAt: 2 },
      { icon: "✣", name: "Resolution & case agent", role: "Approval, remote fix and verification", activeAt: 3 },
    ],
  },
};

const walkthrough = [
  {
    title: "The moment",
    kicker: "THE CUSTOMER",
    heading: "Two problems. One conversation.",
    description: "Sarah contacts support because her bill increased by $23 and her connection has been dropping. She should not have to call twice, repeat herself, or figure out which department owns the problem.",
    takeaway: "Start with the customer's need—not the channel or the org chart.",
    visualTag: "CUSTOMER MESSAGE",
    visualText: "“My bill is higher, and my Wi-Fi keeps dropping.”",
    agents: [],
  },
  {
    title: "One front door",
    kicker: "PHONE · WEB · APP",
    heading: "Keep the experience continuous.",
    description: "Sarah can start in the app, on the web or on a call. The conversation and case context travel with her. The channel is an access point—not a different support journey.",
    takeaway: "One identity, one case history, one consistent experience.",
    visualTag: "ANY CHANNEL",
    visualText: "App · Web · Contact center",
    agents: ["Conversation orchestrator"],
  },
  {
    title: "Understand",
    kicker: "LISTEN & CONTEXTUALIZE",
    heading: "Understand intent and customer context.",
    description: "Conversation intelligence identifies billing and connectivity needs. With appropriate permissions, customer context brings in the plan, prior contact and active service signals.",
    takeaway: "Use relevant, permissioned context—not a blank-slate chatbot.",
    visualTag: "CUSTOMER 360",
    visualText: "Promotion ended · Gateway signal drops · No area outage",
    agents: ["Conversation orchestrator", "Customer context"],
  },
  {
    title: "Investigate",
    kicker: "SPECIALISTS IN PARALLEL",
    heading: "Ask the right experts at the same time.",
    description: "Billing intelligence compares statements and finds the cause. Network operations and device analytics inspect service and gateway health. The orchestrator brings the evidence together.",
    takeaway: "Specialist agents work from governed tools and trusted sources.",
    visualTag: "INVESTIGATING",
    visualText: "Billing comparison + network diagnostics",
    agents: ["Conversation orchestrator", "Customer context", "Billing intelligence", "Network operations", "Device analytics"],
  },
  {
    title: "Explain",
    kicker: "EARN TRUST",
    heading: "Make the answer clear before taking action.",
    description: "Sarah sees exactly why the bill changed and what can be done about it. The network issue is explained in plain language, with the proposed fix and its impact stated up front.",
    takeaway: "Explain the cause, options and trade-offs with evidence.",
    visualTag: "PLAIN-LANGUAGE ANSWER",
    visualText: "$20 promotion expired · $15 monthly loyalty offer",
    agents: ["Billing intelligence", "Network operations", "Offer guidance"],
  },
  {
    title: "Resolve",
    kicker: "HUMAN-APPROVED ACTION",
    heading: "Let Sarah stay in control.",
    description: "The assistant asks before applying a discount or refreshing equipment. A human agent can review, approve or take over. Customer-impacting actions are not silently executed.",
    takeaway: "Autonomy with permission, approval gates and a clear handoff.",
    visualTag: "BEFORE ACTION",
    visualText: "“Would you like me to apply the offer and refresh your gateway?”",
    agents: ["Resolution & case agent", "Human agent"],
  },
  {
    title: "Verify & learn",
    kicker: "CLOSE THE LOOP",
    heading: "Confirm the fix—and improve the service.",
    description: "The connection is tested after the change. The updated bill estimate and actions are documented once in the shared case. Aggregated patterns help teams improve knowledge and operations.",
    takeaway: "A resolution is complete when it is verified, explained and recorded.",
    visualTag: "RESOLUTION CONFIRMED",
    visualText: "Bill clarified · Wi-Fi tested · One case summary",
    agents: ["Resolution & case agent", "Knowledge & insights"],
  },
];

const architectureLayers = [
  {
    name: "Customer experience",
    description: "Bring the customer's chosen channel into one service journey.",
    services: ["Dynamics 365 Contact Center", "Dynamics 365 Customer Service", "Copilot Studio", "Teams Phone", "Web & mobile app", "Azure Communication Services"],
  },
  {
    name: "AI & orchestration",
    description: "Grounded reasoning, speech and coordinated specialist agents.",
    services: ["Azure AI Foundry", "Azure OpenAI", "Azure AI Speech", "Azure AI Language", "Azure AI Vision", "Copilot Studio agents"],
  },
  {
    name: "Customer & knowledge context",
    description: "Permissioned customer profile, case history and trusted content.",
    services: ["Dynamics 365", "Dataverse", "Microsoft Fabric / OneLake", "SharePoint knowledge", "Products & service history"],
  },
  {
    name: "Business systems & action",
    description: "Connect explainable decisions to controlled operational workflows.",
    services: ["Billing / OSS / BSS", "Network telemetry", "Azure IoT device management", "Dynamics 365 Field Service", "Approved service APIs"],
  },
  {
    name: "Measurement & learning",
    description: "Track customer outcomes, resolution quality and operational themes.",
    services: ["Microsoft Fabric", "Real-Time Intelligence", "Power BI", "Knowledge improvement", "Quality & coaching insights"],
  },
];

const state = { scenario: "combined", step: -1, channel: "app", storyStep: 0, playback: null };
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function updateScenario(scenarioId, reset = true) {
  if (!scenarios[scenarioId]) return;
  state.scenario = scenarioId;
  if (reset) state.step = -1;
  const scenario = scenarios[scenarioId];

  $$(".scenario-card").forEach((button) => button.classList.toggle("selected", button.dataset.scenario === scenarioId));
  $$(".scenario-nav-item").forEach((button) => {
    const selected = button.dataset.scenario === scenarioId;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-pressed", String(selected));
    if (selected) button.setAttribute("aria-current", "true");
    else button.removeAttribute("aria-current");
  });
  $$(".scenario-card").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.scenario === scenarioId)));

  $("#case-id").textContent = scenario.id;
  $("#plan-name").textContent = scenario.plan;
  $("#bill-total").textContent = scenario.bill;
  $("#bill-change").textContent = scenario.billChange;
  $("#network-health").textContent = scenario.network;
  $("#network-detail").textContent = scenario.networkDetail;
  $("#conversation-context p").textContent = scenario.opening;
  $("#signal-list").replaceChildren(...scenario.signals.map(createSignal));
  renderConversation();
  renderAgents();
}

function createSignal(signal) {
  const row = document.createElement("div");
  row.className = "signal-item";
  const icon = document.createElement("span");
  icon.className = `signal-icon ${signal.kind}`;
  icon.textContent = signal.icon;
  const content = document.createElement("span");
  content.className = "signal-text";
  const label = document.createElement("span");
  label.textContent = signal.text;
  const tag = document.createElement("small");
  tag.textContent = signal.time;
  content.append(label, tag);
  row.append(icon, content);
  return row;
}

function renderConversation() {
  const transcript = $("#transcript");
  const scenario = scenarios[state.scenario];
  const visibleMessages = scenario.messages.slice(0, state.step + 1);
  transcript.replaceChildren();
  if (visibleMessages.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-transcript";
    empty.innerHTML = '<span class="empty-orbit"><span>✳</span></span><strong>Your conversation starts here</strong><p>Start the guided demo to see the customer, service, billing and AI work together in one case.</p>';
    transcript.append(empty);
    $("#conversation-badge").textContent = "READY";
    $("#conversation-badge").parentElement.classList.remove("is-live");
    $("#case-status").textContent = "Ready to start";
    $("#next-step-label").textContent = "Start guided resolution";
    $("#next-step").disabled = false;
    return;
  }

  visibleMessages.forEach((message) => {
    const item = document.createElement("div");
    item.className = `message ${message.role}`;
    const avatar = document.createElement("span");
    avatar.className = "message-avatar";
    avatar.textContent = message.role === "customer" ? "ST" : "✳";
    const body = document.createElement("div");
    body.className = "message-body";
    const meta = document.createElement("span");
    meta.className = "message-meta";
    meta.textContent = message.role === "customer" ? "Sarah Thompson" : "OneCare assistant";
    const bubble = document.createElement("div");
    bubble.className = "message-bubble";
    bubble.textContent = message.text;
    body.append(meta, bubble);
    if (message.note) {
      const note = document.createElement("span");
      note.className = "message-note";
      note.textContent = message.note;
      body.append(note);
    }
    item.append(avatar, body);
    transcript.append(item);
  });
  transcript.scrollTop = transcript.scrollHeight;
  $("#conversation-badge").textContent = state.step === scenario.messages.length - 1 ? "RESOLVED" : "IN PROGRESS";
  $("#conversation-badge").parentElement.classList.add("is-live");
  $("#case-status").textContent = state.step === scenario.messages.length - 1 ? "Resolved · verified" : "Guided resolution in progress";
  $("#next-step-label").textContent = state.step === scenario.messages.length - 1 ? "Resolution complete" : "Continue resolution";
  $("#next-step").disabled = state.step === scenario.messages.length - 1;
}

function renderAgents() {
  const list = $("#agent-list");
  const scenario = scenarios[state.scenario];
  list.replaceChildren(...scenario.agents.map((agent) => {
    const status = state.step < agent.activeAt ? "Standby" : state.step === scenario.messages.length - 1 ? "Complete" : "Active";
    const row = document.createElement("div");
    row.className = "agent-row";
    const icon = document.createElement("span");
    icon.className = `agent-avatar ${status === "Active" ? "status-active" : status === "Complete" ? "status-done" : ""}`;
    icon.textContent = agent.icon;
    const copy = document.createElement("span");
    copy.className = "agent-row-copy";
    const title = document.createElement("strong");
    title.textContent = agent.name;
    const details = document.createElement("small");
    details.textContent = agent.role;
    copy.append(title, details);
    const stateLabel = document.createElement("span");
    stateLabel.className = `agent-status ${status.toLowerCase()}`;
    stateLabel.textContent = status;
    row.append(icon, copy, stateLabel);
    return row;
  }));
  $("#agents-active-count").textContent = scenario.agents.filter((agent) => state.step >= agent.activeAt).length;
}

function nextScenarioStep() {
  const scenario = scenarios[state.scenario];
  if (state.step < scenario.messages.length - 1) {
    state.step += 1;
    renderConversation();
    renderAgents();
  }
}

function setView(viewName) {
  $$(".view-panel").forEach((panel) => {
    const active = panel.id === `view-${viewName}`;
    panel.hidden = !active;
    panel.classList.toggle("active", active);
  });
  $$(".nav-link").forEach((button) => {
    const active = button.dataset.view === viewName;
    button.classList.toggle("active", active);
    if (active) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  const labels = { live: "Live resolution", walkthrough: "Executive walkthrough", architecture: "Microsoft architecture" };
  $("#breadcrumb-current").textContent = labels[viewName];
}

function renderStory() {
  const step = walkthrough[state.storyStep];
  const number = String(state.storyStep + 1).padStart(2, "0");
  $("#story-progress-label").textContent = `${number} / ${String(walkthrough.length).padStart(2, "0")}`;
  $("#story-progress").style.width = `${((state.storyStep + 1) / walkthrough.length) * 100}%`;
  $("#story-kicker").textContent = step.kicker;
  $("#story-heading").textContent = step.heading;
  $("#story-description").textContent = step.description;
  $("#story-takeaway").textContent = step.takeaway;
  $("#story-current-title").textContent = `${number}   ${step.title}`;
  $("#story-previous").disabled = state.storyStep === 0;
  $("#story-next").innerHTML = state.storyStep === walkthrough.length - 1 ? "<span>Restart</span> ↻" : "<span>Next</span> →";
  $(".visual-tag").textContent = step.visualTag;
  $(".visual-card > strong").textContent = step.visualText;

  const visibleAgents = [
    ["Conversation orchestrator", "✳", "Intent, handoffs and shared conversation"],
    ["Customer context", "◎", "Account, products and recent cases"],
    ["Billing intelligence", "$", "Statement comparison and explanation"],
    ["Network operations", "⌁", "Fibre, service and network telemetry"],
    ["Device analytics", "◉", "Gateway, Wi-Fi and connected devices"],
    ["Resolution & case agent", "✣", "Approval, action and documentation"],
    ["Human agent", "◌", "Judgment, approval and customer care"],
    ["Knowledge & insights", "⌘", "Quality, themes and service improvement"],
  ];
  const list = $("#walkthrough-agent-list");
  list.replaceChildren(...visibleAgents.map(([name, icon, description]) => {
    const row = document.createElement("div");
    const involved = step.agents.includes(name);
    row.className = `walk-agent ${involved ? "involved" : ""}`;
    const badge = document.createElement("span");
    badge.className = "walk-agent-icon";
    badge.textContent = icon;
    const copy = document.createElement("span");
    const title = document.createElement("strong");
    title.textContent = name;
    const details = document.createElement("small");
    details.textContent = description;
    copy.append(title, details);
    const check = document.createElement("span");
    check.className = "walk-agent-check";
    check.textContent = involved ? "✓" : "";
    check.setAttribute("aria-hidden", String(!involved));
    row.append(badge, copy, check);
    return row;
  }));
}

function nextStoryStep() {
  state.storyStep = state.storyStep === walkthrough.length - 1 ? 0 : state.storyStep + 1;
  renderStory();
}

function stopPlayback() {
  if (state.playback) {
    window.clearInterval(state.playback);
    state.playback = null;
  }
  $("#walkthrough-play-label").textContent = "Play walkthrough";
}

function togglePlayback() {
  if (state.playback) {
    stopPlayback();
    return;
  }
  if (state.storyStep === walkthrough.length - 1) {
    state.storyStep = -1;
  }
  $("#walkthrough-play-label").textContent = "Pause walkthrough";
  state.playback = window.setInterval(() => {
    if (state.storyStep >= walkthrough.length - 1) {
      stopPlayback();
      return;
    }
    state.storyStep += 1;
    renderStory();
  }, 4800);
  state.storyStep += 1;
  renderStory();
}

function renderArchitecture() {
  const flow = $("#architecture-flow");
  flow.replaceChildren(...architectureLayers.map((layer, index) => {
    const article = document.createElement("section");
    article.className = "arch-layer";
    const heading = document.createElement("div");
    heading.className = "arch-layer-heading";
    const number = document.createElement("span");
    number.className = "arch-layer-number";
    number.textContent = String(index + 1).padStart(2, "0");
    const title = document.createElement("span");
    const name = document.createElement("strong");
    name.textContent = layer.name;
    const description = document.createElement("small");
    description.textContent = layer.description;
    title.append(name, description);
    heading.append(number, title);
    const services = document.createElement("div");
    services.className = "arch-layer-content";
    layer.services.forEach((service) => {
      const pill = document.createElement("span");
      pill.className = "service-pill";
      pill.textContent = service;
      services.append(pill);
    });
    article.append(heading, services);
    return article;
  }));
}

$$(".nav-link").forEach((button) => button.addEventListener("click", () => setView(button.dataset.view)));
$$(".scenario-card, .scenario-nav-item").forEach((button) => button.addEventListener("click", () => updateScenario(button.dataset.scenario)));
$("#next-step").addEventListener("click", nextScenarioStep);
$("#restart-demo").addEventListener("click", () => updateScenario(state.scenario));
$$(".channel-option").forEach((button) => button.addEventListener("click", () => {
  state.channel = button.dataset.channel;
  $$(".channel-option").forEach((option) => {
    option.classList.toggle("selected", option === button);
    option.setAttribute("aria-pressed", String(option === button));
  });
  const names = { app: "App", web: "Web", phone: "Phone" };
  $("#conversation-subtitle").textContent = `A continuous conversation · currently via ${names[state.channel]}`;
}));
$("#story-previous").addEventListener("click", () => {
  if (state.storyStep > 0) state.storyStep -= 1;
  stopPlayback();
  renderStory();
});
$("#story-next").addEventListener("click", () => {
  stopPlayback();
  nextStoryStep();
});
$("#walkthrough-start").addEventListener("click", togglePlayback);

renderArchitecture();
renderStory();
updateScenario(state.scenario);
