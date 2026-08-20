/**
 * The facts in the Privacy Policy and Terms that cannot be derived from the
 * codebase. Fill these in, flip `LEGAL_READY` to true, and the pages become
 * indexable and appear in the footer and sitemap.
 *
 * Until then both pages carry a visible draft banner and a `noindex` robots
 * directive, and nothing links to them — a policy naming "{{...}}" as the data
 * fiduciary is worse than no published policy at all.
 *
 * Everything NOT in this file was read off the running code (models, services,
 * TTL indexes) and should only change when the product changes.
 */

/** Flip to true only once every value below is real. */
export const LEGAL_READY = false;

export const legal = {
  /** Registered company name — the "data fiduciary" under the DPDP Act. */
  entity: "{{LEGAL_ENTITY_NAME}}",

  /** Registered office address, as filed. */
  address: "{{REGISTERED_ADDRESS}}",

  /** City whose courts have exclusive jurisdiction, e.g. "Bengaluru, Karnataka". */
  jurisdiction: "{{CITY_AND_STATE}}",

  /**
   * DPDP Act s.13 requires a named Grievance Officer and a working contact for
   * data-principal complaints. A generic support alias does not satisfy it.
   */
  grievanceOfficer: "{{GRIEVANCE_OFFICER_NAME}}",
  grievanceEmail: "{{GRIEVANCE_OFFICER_EMAIL}}",

  /**
   * How long business records survive after an account is closed. Note the
   * floor: Indian tax law obliges the *business* to keep GST records for 72
   * months from the annual-return due date (CGST Act s.36), so deleting a
   * customer's invoices on request can put them in breach. State a period that
   * respects that.
   */
  retentionAfterClosure: "{{RETENTION_PERIOD_AFTER_CLOSURE}}",

  /** Date these documents take effect, e.g. "1 September 2026". */
  effectiveDate: "{{EFFECTIVE_DATE}}",
} as const;

/** True when a value is still an unfilled placeholder. */
export const isPlaceholder = (value: string) => value.startsWith("{{");
