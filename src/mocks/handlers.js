// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.get("/api/users", (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: "高修文",
        },
        {
          id: 2,
          name: "熊天成",
        },
        {
          id: 3,
          name: "郑华",
        },
        {
          id: 4,
          name: "王文静",
        },
      ])
    );
  }),

  rest.get("/api/projects", (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: "骑手管理",
          personId: 1,
          organization: "外卖组",
          created: 1604989757139,
        },
        {
          id: 2,
          name: "团购 APP",
          personId: 2,
          organization: "团购组",
          created: 1604989757139,
        },
        {
          id: 3,
          name: "物料管理系统",
          personId: 2,
          organization: "物料组",
          created: 1546300800000,
        },
        {
          id: 4,
          name: "总部管理系统",
          personId: 3,
          organization: "总部",
          created: 1604980000011,
        },
        {
          id: 5,
          name: "送餐路线规划系统",
          personId: 4,
          organization: "外卖组",
          created: 1546900800000,
        },
      ])
    );
  }),

  rest.post("/login", (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem("is-authenticated", "true");

    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),

  rest.get("/user", (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem("is-authenticated");

    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }

    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      })
    );
  }),
];
