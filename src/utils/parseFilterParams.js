const parseStatus = (statusType) => {
  if (typeof statusType !== 'string') return;

  const validStatus = ['done', 'undone'];
  if (validStatus.includes(statusType)) return statusType;
};

export const parseFilteredParams = (query) => {
  const { statusType } = query;

  console.log(statusType);

  const parsedStatus = parseStatus(statusType);

  return {
    statusType: parsedStatus,
  };
};
