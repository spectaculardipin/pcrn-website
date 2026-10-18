export interface PatientRight {
  id: string;
  number: number;
  title: string;
  nepaliTitle: string;
  shortSummary: string;
  legalBasis: string;
  iconName: string;
  keyPoints: string[];
  patientChecklist: string[];
  whatToDoIfViolated: string;
}

export const patientRights: PatientRight[] = [
  {
    id: "right-to-information",
    number: 1,
    title: "Right to Full Medical Information",
    nepaliTitle: "पूर्ण स्वास्थ्य सूचना तथा परामर्शको अधिकार",
    shortSummary:
      "Every patient has the right to understand their medical condition, proposed treatments, potential side effects, expected recovery, and estimated costs in language they understand.",
    legalBasis:
      "Public Health Service Act 2075 (2018), Section 11 & Nepal Medical Council (NMC) Code of Ethics",
    iconName: "FileText",
    keyPoints: [
      "Clear explanation of diagnosis, causes, and stage of illness.",
      "Details regarding all possible treatment pathways, including non-surgical alternatives.",
      "Transparent disclosure of known risks, success rates, and side effects.",
      "Clear advance estimate of total treatment, medication, and hospitalization costs.",
      "Right to receive explanations in clear Nepali or a local language without complex medical jargon.",
    ],
    patientChecklist: [
      "Did the doctor explain what condition you have and what caused it?",
      "Were you told about both the benefits and risks of the medicine or procedure?",
      "Do you know the estimated cost before starting elective treatment?",
    ],
    whatToDoIfViolated:
      "Request a formal sit-down consultation with the treating consultant or the Medical Superintendent. You have the right to request all explanations in writing on your clinical chart.",
  },
  {
    id: "right-to-informed-consent",
    number: 2,
    title: "Right to Free & Informed Consent",
    nepaliTitle: "सुसूचित मञ्जुरी (Informed Consent) को अधिकार",
    shortSummary:
      "No invasive procedure, surgery, or clinical trial can be performed on you without prior voluntary informed consent, except in life-threatening emergencies.",
    legalBasis:
      "Public Health Service Act 2075 (2018), Section 11 & Muluki Civil Code 2074",
    iconName: "ShieldCheck",
    keyPoints: [
      "Consent forms must be presented with sufficient time for you and your family to read and understand.",
      "Signing a blanket or blank consent form is illegal and unethical.",
      "Patients have the unconditional right to seek a second medical opinion from another specialist.",
      "Consent given can be withdrawn at any time prior to the procedure.",
      "In the case of minors or incapacitated patients, authorized legal guardians provide consent with patient's best interest.",
    ],
    patientChecklist: [
      "Did you read and understand the consent form before signing?",
      "Were all questions regarding potential complications answered truthfully?",
      "Did you feel pressured or rushed into consenting?",
    ],
    whatToDoIfViolated:
      "Never sign blank or untranslated consent forms. Demand an explanation in Nepali. If a procedure was conducted without consent outside an emergency, submit an urgent complaint to the hospital administration.",
  },
  {
    id: "right-to-emergency-care",
    number: 3,
    title: "Right to Emergency Healthcare",
    nepaliTitle: "आकस्मिक स्वास्थ्य उपचार पाउने अधिकार",
    shortSummary:
      "Under the Constitution of Nepal, every citizen has the fundamental right to free emergency treatment. No hospital may deny life-saving emergency care due to inability to pay.",
    legalBasis:
      "Constitution of Nepal 2072, Article 35(1) & Public Health Service Act 2075, Section 4",
    iconName: "HeartPulse",
    keyPoints: [
      "Hospitals (both government and private) are legally mandated to admit and stabilize any emergency patient immediately.",
      "Treatment cannot be withheld or delayed pending advance deposit or payment.",
      "Emergency patients cannot be turned away without initial triage, stabilization, and secure ambulance referral.",
      "Immediate life-saving interventions take legal precedence over billing and registration paperwork.",
    ],
    patientChecklist: [
      "Did emergency triage attend to you immediately upon arrival?",
      "Was critical life-saving care provided without demanding upfront deposits?",
    ],
    whatToDoIfViolated:
      "Denial of emergency care is a severe constitutional and criminal violation. Contact PCRN's emergency hotline or file an immediate report with the local District Administration Office (DAO) and Ministry of Health.",
  },
  {
    id: "right-to-privacy-confidentiality",
    number: 4,
    title: "Right to Privacy & Confidentiality",
    nepaliTitle: "गोपनीयता तथा व्यक्तिगत मर्यादाको अधिकार",
    shortSummary:
      "Your medical records, diagnosis, and physical examinations must remain strictly private. Examinations must be conducted with human dignity in screened private areas.",
    legalBasis:
      "Right to Privacy Act 2075 & Nepal Medical Council Professional Regulations",
    iconName: "Lock",
    keyPoints: [
      "Physical examinations must be conducted in private rooms with privacy curtains or screens.",
      "A female chaperone/nurse must be present during examinations of female patients by male practitioners.",
      "Your health information cannot be disclosed to employers, media, or third parties without written authorization.",
      "Medical records must be securely stored in electronic or physical hospital archives.",
    ],
    patientChecklist: [
      "Was your privacy respected during physical examinations?",
      "Were unauthorized individuals kept outside during confidential clinical consultations?",
    ],
    whatToDoIfViolated:
      "Lodge a formal objection with the hospital's privacy officer or Medical Director. Breaches of privacy are actionable under the Right to Privacy Act 2075.",
  },
  {
    id: "right-to-refuse-treatment",
    number: 5,
    title: "Right to Refuse or Discontinue Treatment",
    nepaliTitle: "उपचार अस्वीकार वा स्थानान्तरण गर्ने अधिकार",
    shortSummary:
      "Every mentally competent patient has the legal right to decline any recommended treatment, surgery, or medication after understanding the clinical implications.",
    legalBasis: "Muluki Civil Code 2074 & International Human Rights Standards",
    iconName: "AlertOctagon",
    keyPoints: [
      "Doctors must explain the medical consequences of refusal without coercion or punitive demeanor.",
      "Patients have the right to leave a facility against medical advice (LAMA/DAMA) with their records.",
      "Refusing a particular treatment does not forfeit your right to alternative or palliative care.",
      "Medical practitioners cannot hold patients hostage or detain them over clinical disagreements.",
    ],
    patientChecklist: [
      "Were your wishes and autonomy respected when discussing treatment choices?",
      "Did the clinical staff explain what risks you face if you decline the procedure?",
    ],
    whatToDoIfViolated:
      "Document the refusal formally on the hospital's Discharge Against Medical Advice form. Contact PCRN if the facility attempts to withhold your existing records or medicine prescriptions.",
  },
  {
    id: "right-to-transparent-billing",
    number: 6,
    title: "Right to Fair & Itemized Billing",
    nepaliTitle: "पारदर्शी तथा वस्तुगत बिलिङको अधिकार",
    shortSummary:
      "Patients are entitled to an exact, itemized invoice detailing each service, laboratory investigation, medicine, and bed charge before making payment.",
    legalBasis:
      "Health Institution Operation Standards 2077 (2020), Consumer Protection Act 2075 & Public Health Service Act 2075",
    iconName: "Receipt",
    keyPoints: [
      "Right to receive an itemized bill showing MRP for all medicines and consumables.",
      "Ban on charging prices exceeding the government Maximum Retail Price (MRP).",
      "No hospital may detain a patient, new mother, or deceased body due to unpaid hospital bills.",
      "Mandatory 10% bed and service allocation for free treatment of indigent patients under Health Institution Operation Standards 2077.",
    ],
    patientChecklist: [
      "Were you provided an itemized bill before payment rather than a lump-sum receipt?",
      "Did medicine prices match the printed MRP on packaging?",
      "Were you informed about the hospital's 10% free bed quota for underprivileged citizens?",
    ],
    whatToDoIfViolated:
      "Hospitals detaining patients or corpses over unpaid bills violate Supreme Court of Nepal directives. Contact the local police, District Administration Office, and PCRN immediately.",
  },
  {
    id: "right-to-medical-records",
    number: 7,
    title: "Right to Access Medical Records",
    nepaliTitle: "आफ्नो स्वास्थ्य अभिलेख पाउने अधिकार",
    shortSummary:
      "You have the right to receive certified copies of your medical records, diagnostic test reports, operation notes, and discharge summaries upon request.",
    legalBasis:
      "Public Health Service Act 2075 & Right to Information Act 2064",
    iconName: "ClipboardList",
    keyPoints: [
      "Hospitals must provide discharge summaries immediately upon release.",
      "Patients or authorized family members can request full certified copies of charts and lab reports.",
      "Facilities cannot withhold investigative reports that the patient has already paid for.",
      "Access to complete records is essential for seeking second opinions or filing grievance reviews.",
    ],
    patientChecklist: [
      "Did you receive a detailed Discharge Summary upon leaving the facility?",
      "Were all paid blood tests, X-rays, CT/MRI scans and biopsy reports handed to you?",
    ],
    whatToDoIfViolated:
      "Submit a written application referencing the Right to Information Act to the Hospital Medical Records Department. PCRN can assist in drafting formal requests.",
  },
  {
    id: "right-to-grievance-redress",
    number: 8,
    title: "Right to Redress, Complaint & Fair Hearing",
    nepaliTitle: "उजुरी, सुनुवाइ तथा क्षतिपूर्ति पाउने अधिकार",
    shortSummary:
      "Patients harmed by clinical negligence, overcharging, or mistreatment have the legal right to lodge formal complaints with hospital grievance desks, NMC, and legal courts.",
    legalBasis:
      "Nepal Medical Council Act, 2020 (1964), Public Health Service Act 2075 & Consumer Protection Act 2075",
    iconName: "Scale",
    keyPoints: [
      "Every hospital must maintain a functional, accessible Patient Grievance Desk (गुनासो सुन्ने अधिकारी).",
      "Right to file disciplinary complaints regarding physician misconduct or malpractice before the Nepal Medical Council (NMC).",
      "Right to claim monetary compensation for medical negligence through Consumer Courts and civil tribunals.",
      "Protection against retaliation or denial of future care when filing a legitimate complaint.",
    ],
    patientChecklist: [
      "Is the hospital's Grievance Desk clearly signposted and accessible?",
      "Was your complaint registered with an official tracking number or acknowledgment slip?",
    ],
    whatToDoIfViolated:
      "Preserve all prescription slips, payment receipts, test results, and discharge notes. Contact PCRN for free guidance on filing complaints with the NMC Ethical Committee and relevant authorities.",
  },
];

export const patientFAQ = [
  {
    q: "Can a private hospital in Nepal refuse to treat me if I have an emergency and cannot pay immediately?",
    a: "No. Article 35 of the Constitution of Nepal and Section 4 of the Public Health Service Act 2075 explicitly forbid any hospital—public or private—from denying life-saving emergency medical stabilization. Once stabilized, referral can be coordinated if specialized care is needed.",
  },
  {
    q: "Can a hospital detain a patient or refuse to release a body because of unpaid bills?",
    a: "No. The Supreme Court of Nepal has repeatedly ruled that detaining patients or deceased bodies over unpaid hospital fees is unlawful and violates constitutional human dignity. Hospitals must pursue civil recovery through lawful avenues rather than unlawful detention.",
  },
  {
    q: "What is the 10% free healthcare quota in private hospitals?",
    a: "Under the Health Institution Operation Standards 2077 (2020) and the Public Health Service Act 2075, all private, community, and teaching hospitals in Nepal are legally mandated to set aside 10% of their total beds and diagnostic services free of cost for impoverished, helpless, senior citizen, and disabled patients.",
  },
  {
    q: "How can PCRN assist me if my rights have been infringed?",
    a: "PCRN provides free informational guidance, helps you understand your legal options, assists with drafting formal requests for medical records, and guides you on submitting complaints to the hospital grievance desk, Nepal Medical Council, or Consumer Protection forums.",
  },
];
