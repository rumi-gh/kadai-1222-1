export const Practice1 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };

  // const onClickPractice = () => alert();
  const onClickPractice = () => calcTotalFee(1000);

  // const onClickPractice = () => calcTotalFee("1000");
  // 文字列「1000」を渡しても、数値に変換して計算してくれる

  // const onClickPractice = () => calcTotalFee("1,000");
  // Nan（Not a number）

  return (
    <div>
      <p>練習問題：引数の型指定</p>
      <button onClick={onClickPractice}>練習問題1を実行</button>
    </div>
  );
};
