/* ==========================================================================
   SANDEEP (Ph.D.) — ACADEMIC PORTFOLIO INTERACTIVITY
   ========================================================================== */

/**
 * Scroll smoothly to the main research section
 */
function scrollToProjects() {
  scrollToSection('projects-section');
}

/**
 * Scroll smoothly to any section
 */
function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    var offset = 20;
    var top = section.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: top, behavior: 'smooth' });
  }
}

/**
 * Tab switcher for Breast Segmentation Model Section
 */
function switchSegTab(tabId) {
  // Hide all segmentation tabs
  document.getElementById('seg-tab-mri').style.display = 'none';
  document.getElementById('seg-tab-arch').style.display = 'none';
  document.getElementById('seg-tab-out').style.display = 'none';
  document.getElementById('seg-tab-ablation').style.display = 'none';
  
  // Show active tab
  document.getElementById('seg-tab-' + tabId).style.display = 'block';

  // Toggle button active classes
  var segBtnRow = document.querySelectorAll('.tab-btn-row')[0];
  if (segBtnRow) {
    var btns = segBtnRow.querySelectorAll('.tab-btn');
    btns.forEach(function(btn, index) {
      btn.classList.remove('active-tab');
      if (tabId === 'mri' && index === 0) btn.classList.add('active-tab');
      if (tabId === 'arch' && index === 1) btn.classList.add('active-tab');
      if (tabId === 'out' && index === 2) btn.classList.add('active-tab');
      if (tabId === 'ablation' && index === 3) btn.classList.add('active-tab');
    });
  }
}

/**
 * Gallery Image Switcher for Segmentation Outputs Tab
 */
function updateSegGallery(imgSrc, titleText) {
  var mainDisplay = document.getElementById('seg-main-display');
  var titleDisplay = document.getElementById('seg-main-title');
  
  if (mainDisplay) {
    mainDisplay.src = 'images/' + imgSrc;
  }
  if (titleDisplay) {
    titleDisplay.textContent = 'Figure 1.3: ' + titleText;
  }

  // Toggle outline active state
  var thumbs = document.querySelectorAll('.gallery-row .gallery-img-wrap');
  thumbs.forEach(function(thumb, index) {
    if (index < 3) {
      thumb.classList.remove('active-thumb');
      var img = thumb.querySelector('img');
      if (img && img.getAttribute('src').indexOf(imgSrc) !== -1) {
        thumb.classList.add('active-thumb');
      }
    }
  });
}

/**
 * Tab switcher for Magnetic Hyperthermia Section
 */
function switchHypTab(tabId) {
  // Hide all tabs
  document.getElementById('hyp-tab-math').style.display = 'none';
  document.getElementById('hyp-tab-exp').style.display = 'none';
  document.getElementById('hyp-tab-clinical').style.display = 'none';
  
  // Show active tab
  document.getElementById('hyp-tab-' + tabId).style.display = 'block';

  // Toggle button active classes
  var parentSection = document.getElementById('hyp-tab-math').parentElement;
  var btns = parentSection.querySelectorAll('.tab-btn-row:nth-of-type(2) .tab-btn');
  
  var hyperBtnRow = document.querySelectorAll('.tab-btn-row')[1];
  if (hyperBtnRow) {
    var sectionBtns = hyperBtnRow.querySelectorAll('.tab-btn');
    sectionBtns.forEach(function(btn, index) {
      btn.classList.remove('active-tab');
      if (tabId === 'math' && index === 0) btn.classList.add('active-tab');
      if (tabId === 'exp' && index === 1) btn.classList.add('active-tab');
      if (tabId === 'clinical' && index === 2) btn.classList.add('active-tab');
    });
  }
}

/**
 * Tab switcher for Intratumoral Dosage & Heat-Sink Section
 */
function switchDoseTab(tabId) {
  // Hide all tabs
  document.getElementById('dose-tab-injection').style.display = 'none';
  document.getElementById('dose-tab-sim').style.display = 'none';
  document.getElementById('dose-tab-results').style.display = 'none';
  
  // Show active tab
  document.getElementById('dose-tab-' + tabId).style.display = 'block';

  // Toggle button active classes
  var doseBtnRow = document.querySelectorAll('.tab-btn-row')[2];
  if (doseBtnRow) {
    var sectionBtns = doseBtnRow.querySelectorAll('.tab-btn');
    sectionBtns.forEach(function(btn, index) {
      btn.classList.remove('active-tab');
      if (tabId === 'injection' && index === 0) btn.classList.add('active-tab');
      if (tabId === 'sim' && index === 1) btn.classList.add('active-tab');
      if (tabId === 'results' && index === 2) btn.classList.add('active-tab');
    });
  }
}

/**
 * Tab switcher for ICL Section
 */
function switchIclTab(tabId) {
  document.getElementById('icl-tab-map').style.display = 'none';
  document.getElementById('icl-tab-cfd').style.display = 'none';
  document.getElementById('icl-tab-val').style.display = 'none';
  
  document.getElementById('icl-tab-' + tabId).style.display = 'block';

  var iclBtnRow = document.querySelectorAll('.tab-btn-row')[3];
  if (iclBtnRow) {
    var sectionBtns = iclBtnRow.querySelectorAll('.tab-btn');
    sectionBtns.forEach(function(btn, index) {
      btn.classList.remove('active-tab');
      if (tabId === 'map' && index === 0) btn.classList.add('active-tab');
      if (tabId === 'cfd' && index === 1) btn.classList.add('active-tab');
      if (tabId === 'val' && index === 2) btn.classList.add('active-tab');
    });
  }
}

/**
 * Gallery Image Switcher for ICL Campus Reconstructions
 */
function updateIclMap(imgName, titleText, captionText) {
  var parent = document.getElementById('icl-tab-map');
  var mainImg = parent.querySelector('.scientific-fig-img');
  var titleDisp = document.getElementById('icl-map-title');
  var capDisp = document.getElementById('icl-map-caption');
  
  if (mainImg) {
    mainImg.src = 'images/' + imgName;
  }
  if (titleDisp) {
    titleDisp.textContent = 'Figure 4.1: ' + titleText;
  }
  if (capDisp) {
    capDisp.textContent = captionText;
  }

  // Toggle outline active state
  var thumb1 = document.getElementById('icl-thumb-1');
  var thumb2 = document.getElementById('icl-thumb-2');
  var thumb3 = document.getElementById('icl-thumb-3');
  
  if (thumb1) thumb1.classList.remove('active-thumb');
  if (thumb2) thumb2.classList.remove('active-thumb');
  if (thumb3) thumb3.classList.remove('active-thumb');

  if (imgName === 'work_package_1_28_4_26_image29.jpeg' && thumb1) thumb1.classList.add('active-thumb');
  if (imgName === 'work_package_1_28_4_26_image32.png' && thumb2) thumb2.classList.add('active-thumb');
  if (imgName === 'work_package_1_28_4_26_image33.jpeg' && thumb3) thumb3.classList.add('active-thumb');
}

/**
 * Gallery Image Switcher for Dosimetry Artery Simulation Tab
 */
function updateDoseSimGallery(imgSrc, titleText, captionText) {
  var display = document.getElementById('dose-sim-display');
  var title = document.getElementById('dose-sim-title');
  var caption = document.getElementById('dose-sim-caption');
  
  if (display) display.src = 'images/' + imgSrc;
  if (title) title.textContent = 'Figure 3.2: ' + titleText;
  if (caption) caption.textContent = captionText;
  
  var thumb1 = document.getElementById('dose-sim-thumb-1');
  var thumb2 = document.getElementById('dose-sim-thumb-2');
  
  if (thumb1) thumb1.classList.remove('active-thumb');
  if (thumb2) thumb2.classList.remove('active-thumb');
  
  if (imgSrc.indexOf('image12.png') !== -1 && thumb1) thumb1.classList.add('active-thumb');
  if (imgSrc.indexOf('dsai_ppt_image16.jpeg') !== -1 && thumb2) thumb2.classList.add('active-thumb');
}

/**
 * Research Team member selector
 */
function selectTeamMember(memberId) {
  var members = {
    sandeep: {
      name: "Sandeep Nain (Ph.D.)",
      title: "Lead Researcher & Postdoctoral Fellow",
      img: "images/sandeep_nain.png",
      text: "Specializes in computational fluid dynamics (CFD), multiphase flow transport, magnetic hyperthermia simulation, and developing boundary-aware attention networks (BEAT-Net) for medical image segmentation."
    },
    neeraj: {
      name: "Dr. Neeraj Kumar",
      title: "Professor, Department of Mechanical Engineering, TIET",
      img: "images/neeraj_kumar.png",
      text: "Research interests include bio-heat transfer, computational fluid dynamics (CFD), and heat sink modeling. Serves as advisor and project lead for bio-thermal and environmental modeling projects."
    },
    jainy: {
      name: "Dr. Jainy Sachdewa",
      title: "Associate Professor, Thapar Institute",
      img: "images/jainy_sachdewa.png",
      text: "Focuses on medical image processing, neural networks, machine learning algorithms in healthcare, and collaborative development of CAD models for breast cancer screening."
    },
    pramod: {
      name: "Dr. Pramod Kumar Avti",
      title: "Assistant Professor of Biophysics",
      img: "images/pramod_avti.png",
      text: "Investigates biomaterials, superparamagnetic nanoparticles, and their applications in targeted cancer drug delivery and magnetic nanoparticle hyperthermia therapies."
    },
    keshav: {
      name: "Keshav Juneja",
      title: "Research Intern",
      img: "images/keshav_juneja.png",
      text: "Bachelor of Engineering student in Computer Engineering at Thapar Institute. Built configuration-driven training pipelines for CNN-based PDE surrogate models (Imperial College London) and packaged 3D breast cancer segmentation architectures on institutional HPC clusters (University of Queensland)."
    }
  };

  var data = members[memberId];
  if (!data) return;

  // Update detail card elements
  document.getElementById('team-detail-name').textContent = data.name;
  document.getElementById('team-detail-title').textContent = data.title;
  document.getElementById('team-detail-text').textContent = data.text;
  document.getElementById('team-detail-img').src = data.img;
  document.getElementById('team-detail-img').alt = data.name;

  // Update dynamic links
  var linkEl = document.getElementById('team-detail-link');
  if (linkEl) {
    if (memberId === 'sandeep') {
      linkEl.href = "javascript:void(0)";
      linkEl.setAttribute('onclick', 'openAboutModal()');
      linkEl.textContent = "View Full Profile & CV";
      linkEl.style.display = "inline-block";
    } else if (memberId === 'keshav') {
      linkEl.href = "javascript:void(0)";
      linkEl.setAttribute('onclick', 'openKeshavModal()');
      linkEl.textContent = "View Full Profile & CV";
      linkEl.style.display = "inline-block";
    } else if (memberId === 'neeraj') {
      linkEl.href = "https://med.thapar.edu/facultydetails/MTE3OQ==";
      linkEl.removeAttribute('onclick');
      linkEl.textContent = "Institute Faculty Profile";
      linkEl.style.display = "inline-block";
    } else if (memberId === 'jainy') {
      linkEl.href = "https://eied.thapar.edu/facultydetails/MTEwNw==";
      linkEl.removeAttribute('onclick');
      linkEl.textContent = "Institute Faculty Profile";
      linkEl.style.display = "inline-block";
    } else if (memberId === 'pramod') {
      linkEl.href = "https://pgimer.edu.in/PGIMER_PORTAL/PGIMERPORTAL/Department/Global/JSP/empview.jsp?id=1041";
      linkEl.removeAttribute('onclick');
      linkEl.textContent = "Institute Faculty Profile";
      linkEl.style.display = "inline-block";
    } else {
      linkEl.style.display = "none";
    }
  }

  // Toggle active class on buttons
  var buttons = document.querySelectorAll('.team-member-btn');
  buttons.forEach(function(btn) {
    btn.classList.remove('active-member');
  });

  // Find the clicked button and add active class
  var indexMap = { sandeep: 0, neeraj: 1, jainy: 2, pramod: 3, keshav: 4 };
  var activeBtnIndex = indexMap[memberId];
  if (buttons[activeBtnIndex]) {
    buttons[activeBtnIndex].classList.add('active-member');
  }
}

/**
 * About Modal Toggles
 */
function openAboutModal() {
  var modal = document.getElementById('about-modal');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // prevent background scrolling
  }
}

function closeAboutModal() {
  var modal = document.getElementById('about-modal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = ''; // restore scrolling
  }
}

/**
 * Keshav Modal Toggles
 */
function openKeshavModal() {
  var modal = document.getElementById('keshav-modal');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeKeshavModal() {
  var modal = document.getElementById('keshav-modal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

/**
 * Methodology Modal Toggles
 */
const methodologyData = {
  'ai-cancer': {
    title: 'AI-Driven Cancer Detection & Modeling',
    imagesHtml: `
      <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
          <img src="images/algo_flow_chart_image21.png" style="width: 100%; height: 160px; object-fit: contain; border: 1px solid #E2E8F0; border-radius: 6px; background: #fff; padding: 5px;" alt="Neural Net" />
          <img src="images/doc_image2.png" style="width: 100%; height: 160px; object-fit: contain; border: 1px solid #E2E8F0; border-radius: 6px; background: #fff; padding: 5px;" alt="MRI Slice" />
        </div>
        <img src="images/doc_image6.png" style="width: 100%; height: 160px; object-fit: contain; border: 1px solid #E2E8F0; border-radius: 6px; background: #fff; padding: 5px;" alt="Density Curve" />
      </div>`,
    desc: 'Our AI-driven research utilizes advanced deep learning architectures, such as boundary-enhanced 3D U-Nets (BEAT-Net), to accurately segment complex tumor morphologies from multi-sequence MRI scans. This automates detection, providing highly precise, patient-specific 3D tumor models that serve as a foundation for customized treatment strategies and improved clinical decision-making.'
  },
  'cfd': {
    title: 'Computational Fluid Dynamics (CFD) in Healthcare',
    imagesHtml: `
      <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
          <img src="images/image6.JPG" style="width: 100%; height: 160px; object-fit: contain; border: 1px solid #E2E8F0; border-radius: 6px; background: #fff; padding: 5px;" alt="CFD Lung model" />
          <img src="images/image8.PNG" style="width: 100%; height: 160px; object-fit: contain; border: 1px solid #E2E8F0; border-radius: 6px; background: #fff; padding: 5px;" alt="Channel Flow Plot" />
        </div>
        <img src="images/image7.PNG" style="width: 100%; height: 160px; object-fit: contain; border: 1px solid #E2E8F0; border-radius: 6px; background: #fff; padding: 5px;" alt="Flow Validation Chart" />
      </div>`,
    desc: 'We leverage high-fidelity Computational Fluid Dynamics to model heat and fluid transfer phenomena within complex biological environments. By simulating species transport in tissues through diffusion, convection, and Darcy\'s flow equations, our models accurately predict temperature evolution in cancer tissues, optimizing targeted thermal necrosis and improving therapeutic outcomes.'
  },
  'hyperthermia': {
    title: 'Magnetic Hyperthermia Optimization',
    imagesHtml: `
      <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
          <img src="images/image3.png" style="width: 100%; height: 160px; object-fit: contain; border: 1px solid #E2E8F0; border-radius: 6px; background: #fff; padding: 5px;" alt="MNP AC Excitation" />
          <img src="images/image12.png" style="width: 100%; height: 160px; object-fit: contain; border: 1px solid #E2E8F0; border-radius: 6px; background: #fff; padding: 5px;" alt="Temperature mesh" />
        </div>
        <img src="images/dsai_ppt_image15.jpeg" style="width: 100%; height: 160px; object-fit: contain; border: 1px solid #E2E8F0; border-radius: 6px; background: #fff; padding: 5px;" alt="Mammary artery breast tumor" />
      </div>`,
    desc: 'Our magnetic hyperthermia models couple fluid flow, nanoparticle transport, and bioheat equations to analyze thermal dissipation near blood vessels. This multi-scale approach precisely calculates alternating magnetic field dosages, ensuring maximum thermal damage to tumor tissues while completely preserving surrounding healthy cells during targeted thermotherapy.'
  }
};

function openMethodologyModal(key) {
  var modal = document.getElementById('methodology-modal');
  if (modal && methodologyData[key]) {
    document.getElementById('methodology-modal-title').textContent = methodologyData[key].title;
    document.getElementById('methodology-modal-images').innerHTML = methodologyData[key].imagesHtml;
    document.getElementById('methodology-modal-desc').textContent = methodologyData[key].desc;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeMethodologyModal() {
  var modal = document.getElementById('methodology-modal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

/**
 * Collaboration Modal Toggles
 */
function openCollaborationModal() {
  var modal = document.getElementById('collaboration-modal');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeCollaborationModal() {
  var modal = document.getElementById('collaboration-modal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}


/**
 * Research Highlights Modal Toggles
 */
function openHighlightModal(element) {
  var modal = document.getElementById("highlight-modal");
  if (!modal) return;
  
  var title = element.querySelector(".highlight-title").innerText;
  var imageContainer = element.querySelector(".highlight-img") || element.querySelector("div[style*='display: flex']");
  var clone = imageContainer.cloneNode(true);
  
  if (clone.tagName === "IMG") {
    clone.style.height = "60vh";
    clone.style.maxHeight = "500px";
    clone.style.objectFit = "contain";
    clone.style.width = "100%";
  } else {
    clone.style.height = "60vh";
    clone.style.width = "100%";
    clone.style.maxHeight = "500px";
    clone.style.background = "transparent";
    var images = clone.querySelectorAll("img");
    images.forEach(function(img) {
      img.style.objectFit = "contain";
    });
  }

  document.getElementById("highlight-modal-title").textContent = title;
  
  var modalBody = document.getElementById("highlight-modal-body");
  modalBody.innerHTML = "";
  modalBody.appendChild(clone);
  
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeHighlightModal() {
  var modal = document.getElementById("highlight-modal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }
}



function openHighlightModal(element) {
  var modal = document.getElementById("highlight-modal");
  if (!modal) return;
  
  var title = element.querySelector(".highlight-title").innerText;
  var imageContainer = element.querySelector(".highlight-img") || element.querySelector("div[style*='display: flex']");
  var clone = imageContainer.cloneNode(true);
  
  if (clone.tagName === "IMG") {
    clone.style.height = "60vh";
    clone.style.maxHeight = "400px";
    clone.style.objectFit = "contain";
    clone.style.width = "100%";
    clone.style.marginBottom = "1.5rem";
  } else {
    clone.style.height = "60vh";
    clone.style.width = "100%";
    clone.style.maxHeight = "400px";
    clone.style.background = "transparent";
    clone.style.marginBottom = "1.5rem";
    var images = clone.querySelectorAll("img");
    images.forEach(function(img) {
      img.style.objectFit = "contain";
    });
  }

  var descText = "";
  var descEl = element.querySelector(".highlight-desc");
  if (descEl) {
    descText = descEl.innerHTML;
  }

  document.getElementById("highlight-modal-title").textContent = title;
  
  var modalBody = document.getElementById("highlight-modal-body");
  modalBody.innerHTML = "";
  
  var container = document.createElement("div");
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.width = "100%";
  
  container.appendChild(clone);
  
  if (descText) {
    var p = document.createElement("p");
    p.innerHTML = descText;
    p.style.fontSize = "1.05rem";
    p.style.color = "#475569";
    p.style.lineHeight = "1.7";
    p.style.textAlign = "justify";
    container.appendChild(p);
  }
  
  modalBody.appendChild(container);
  
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

