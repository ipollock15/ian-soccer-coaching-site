export type Credential = {
  label: string;
  status: string;
  details?: string;
  enabled: boolean;
};

export const credentials: Credential[] = [
  { label: "US Soccer / USSF Coaching License", status: "C License", details: "National coaching certification", enabled: true },
  { label: "SafeSport Certified", status: "Active", details: "Comprehensive safety training", enabled: true },
  { label: "Background Check", status: "Cleared", details: "Annual comprehensive check", enabled: true },
  { label: "CPR / First Aid", status: "Certified", details: "American Red Cross", enabled: true },
  { label: "Concussion Awareness", status: "Certified", details: "Heads Up training completed", enabled: true },
  { label: "Coaching Experience", status: "10+ Years", details: "Working with youth to advanced players", enabled: true },
  { label: "Competitive Playing Background", status: "Collegiate", details: "Former collegiate athlete", enabled: true }
];
