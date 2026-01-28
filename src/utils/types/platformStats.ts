export type TPlatformStatsResponse = {
  data: {
    userStats: TPlatformStats;
  };
};

export type TCountObject = {
  count: number;
};
export type TPlatformStats = {
  taskers: TCountObject;
  users: TCountObject;
  totalUsers: TCountObject;
  taskerServices: TCountObject;
  taskPosts: TCountObject;
};
