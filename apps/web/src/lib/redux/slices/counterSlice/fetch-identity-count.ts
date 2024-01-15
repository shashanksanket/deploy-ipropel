/* eslint-disable -- identity-count endpoint doesnt exist, will be removed in future */

export const fetchIdentityCount = async (
  amount = 1,
): Promise<{ data: number }> => {
  const response = await fetch("http://localhost:3000/api/identity-count", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount }),
  });

  const result: { data: number } = await response.json();

  return result;
};
