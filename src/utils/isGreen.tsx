// 화살표 함수
export const IsGreen = (URL: string): boolean => {
  console.log(URL.slice(1));
  const res = URL.includes("/todo") || URL.includes("/tobuy");
  return res;
};
