import { Router } from "express";
import leaderboard from "../controller/leaderboard.controller";

const leaderboardRoute = Router();

// matchRoute.post("/create", verifyBodyRequest, match.addMatch);
leaderboardRoute.get("/getLeaderboard", leaderboard.getLeaderboard);
leaderboardRoute.get("/getAvailableMatches", leaderboard.getAvailableMatches);
leaderboardRoute.get("/getMatchHistory", leaderboard.getMatchHistory);
export default leaderboardRoute;
