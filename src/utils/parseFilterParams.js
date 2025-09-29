const parseStatus = (statusType) => {
  if (typeof statusType !== 'string') return;

  const validStatus = ['done', 'undone'];
  if (validStatus.includes(statusType)) return statusType;
};

export const parseFilteredParams = (query) => {
  const { statusType } = query;

  const parsedStatus = parseStatus(statusType);

  return {
    statusType: parsedStatus,
  };
};
