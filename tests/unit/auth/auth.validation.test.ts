import { describe, expect, it } from "vitest";

describe("Auth validation", () => {
  it("should reject an invalid email", () => {
    const email = "invalid-email";

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    expect(isValid).toBe(false);
  });

  it("should accept a valid email", () => {
    const email = "user@example.com";

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    expect(isValid).toBe(true);
  });
});
