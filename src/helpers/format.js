export const formatStatisticsValue = (value) => {
  return String((parseFloat(value) * 100).toFixed(0));
};

export const formatMonsterDescription = (description) => {
  return description.split(/\.\s*/, 3);
};
