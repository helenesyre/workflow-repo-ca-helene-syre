import { describe, it, expect } from "vitest";
import { isActivePath } from "../../js/utils/userInterface";

describe("isActivePath", () => {
  it("returns true when current path matches href exactly", () => {
    const href = "/home";
    const currentPath = "/home";
    expect(isActivePath(href, currentPath)).toBe(true);
  });

  it('returns true for root path (" / ") when path is " / " or " / index.html"', () => {
    const href = "/";
    const currentPath = "/";
    const currentPathIndex = "/index.html";
    expect(isActivePath(href, currentPath)).toBe(true);
    expect(isActivePath(href, currentPathIndex)).toBe(true);
  });

  it("returns true when current path includes the href", () => {
    const href = "/venue";
    const currentPathVenue = "/venue/123";
    const currentPathVenueIndex = "/venue/index.html";
    expect(isActivePath(href, currentPathVenue)).toBe(true);
    expect(isActivePath(href, currentPathVenueIndex)).toBe(true);
  });

  it("returns false when paths don't match", () => {
    const href = "/about";
    const currentPath = "/contact";
    expect(isActivePath(href, currentPath)).toBe(false);
  });
});
