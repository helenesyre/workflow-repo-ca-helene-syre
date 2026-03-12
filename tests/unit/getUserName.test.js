import { expect, describe, it, beforeEach } from "vitest";
import { getUsername } from "../../js/utils/storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it("returns the name from the user object in storage", () => {
    const user = { name: "Ola" };
    localStorage.setItem("user", JSON.stringify(user));
    expect(getUsername()).toBe("Ola");
  });

  it("returns null when no user exists in storage", () => {
    const user = getUsername();
    expect(user).toBeNull();
  });
});
