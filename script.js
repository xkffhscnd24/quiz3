// 문제 리스트 (심화 문제 샘플 포함)
const questions = [
  { "question": "용접봉의 지름이 클수록 용입 깊이가 깊어진다.", "answer": "X" },
  { "question": "아크 용접에서 용접봉의 각도가 너무 작으면 불량이 발생할 수 있다.", "answer": "O" },
  { "question": "스테인리스 강을 용접할 때는 반드시 아르곤 가스를 사용해야 한다.", "answer": "X" },
  { "question": "용접 시 피복이 제대로 제거되지 않으면 슬래그 불량이 발생할 수 있다.", "answer": "O" },
  { "question": "알루미늄 용접 시 높은 열전도성 때문에 다른 금속보다 높은 전류가 필요하다.", "answer": "O" },
  { "question": "용접기의 주기율은 용접기의 사용 시간과 직접적인 연관이 없다.", "answer": "X" },
  { "question": "CO2 용접에서 CO2 가스는 보호 가스의 역할을 한다.", "answer": "O" },
  { "question": "용접 중 전극이 접촉되지 않으면 아크가 발생하지 않는다.", "answer": "O" },
  { "question": "TIG 용접에서는 전류가 너무 높으면 용접물이 과열되어 품질이 저하된다.", "answer": "O" },
  { "question": "아크 용접 시 습도가 높을 경우 전격 사고의 위험이 증가한다.", "answer": "O" },
  { "question": "고온에서 열팽창이 심한 금속일수록 용접 중 균열이 발생할 가능성이 높다.", "answer": "O" },
  { "question": "용접 작업 중 발생하는 슬래그는 용접 후 제거하지 않아도 된다.", "answer": "X" },
  { "question": "용접 시 전류가 부족할 경우 용접부가 녹지 않거나 얕은 용접이 발생할 수 있다.", "answer": "O" },
  { "question": "플럭스는 용접부의 산화를 막아주는 역할을 한다.", "answer": "O" },
  { "question": "용접봉의 피복은 용접 시 불순물을 제거하는 역할을 한다.", "answer": "O" },
  { "question": "용접기의 사용 주파수는 용접 품질에 영향을 미치지 않는다.", "answer": "X" },
  { "question": "스테인리스 스틸은 탄소 함량이 낮아 용접 시 균열 발생 가능성이 높다.", "answer": "X" },
  { "question": "CO2 용접에서는 산소 함량이 높은 환경에서도 작업이 가능하다.", "answer": "O" },
  { "question": "아크 용접 시 용접 전류가 너무 강하면 금속에 과도한 열이 가해져 구멍이 생길 수 있다.", "answer": "O" },
  { "question": "알루미늄 용접 시 산화 피막을 제거하지 않으면 접합 불량이 발생할 수 있다.", "answer": "O" },
  { "question": "용접부에 과도한 응력이 가해지면 용접부가 균열될 수 있다.", "answer": "O" },
  { "question": "TIG 용접에서 사용하는 전극은 텅스텐이 일반적이다.", "answer": "O" },
  { "question": "용접 후 용접부를 자연 냉각시키면 강도가 낮아질 수 있다.", "answer": "X" },
  { "question": "용접 중 발생하는 플래시는 자외선에 의해 발생한다.", "answer": "O" },
  { "question": "CO2 용접 시 과도한 가스 공급은 불꽃의 불안정을 유발할 수 있다.", "answer": "O" },
  { "question": "용접부의 냉각 속도가 너무 빠르면 균열이 생길 가능성이 높아진다.", "answer": "O" },
  { "question": "용접 시 전류를 높이면 용접 속도도 증가할 수 있다.", "answer": "O" },
  { "question": "스테인리스 강 용접 시 크롬 함유량이 높은 전극을 사용해야 한다.", "answer": "O" },
  { "question": "용접 중 발생하는 스패터는 용접 후 바로 제거하는 것이 좋다.", "answer": "O" },
  { "question": "아크 용접에서 아크 길이가 짧으면 용입 깊이가 얕아질 수 있다.", "answer": "X" },
  { "question": "용접부의 응력 완화를 위해 후열 처리가 필요할 수 있다.", "answer": "O" },
  { "question": "가스 용접 시 산소와 아세틸렌의 혼합 비율은 화염의 온도를 결정한다.", "answer": "O" },
  { "question": "플럭스 코어드 와이어는 추가적인 플럭스가 필요 없다.", "answer": "O" },
  { "question": "용접 시 발생하는 전자파는 작업자의 눈 건강에 영향을 줄 수 있다.", "answer": "O" },
  { "question": "용접 중 발생하는 오존은 호흡기에 해롭지 않다.", "answer": "X" },
  { "question": "용접 후 급격한 냉각은 금속의 경도를 증가시킬 수 있다.", "answer": "O" },
  { "question": "아크 용접에서 용접봉의 피복이 손상되면 불량이 발생할 수 있다.", "answer": "O" },
  { "question": "TIG 용접에서 전극의 각도는 용접 품질에 영향을 미친다.", "answer": "O" },
  { "question": "가스 용접 시 작업 환경의 습도가 높으면 품질이 저하될 수 있다.", "answer": "O" },
  { "question": "용접 후 열처리를 하지 않으면 용접부의 경도가 높아질 수 있다.", "answer": "X" },
  { "question": "용접 중 발생하는 슬래그는 용접부의 냉각을 돕는다.", "answer": "O" },
  { "question": "용접 시 사용하는 피복제는 용접 중 산화물을 생성한다.", "answer": "X" },
  { "question": "스테인리스 강 용접 시 절단 부위는 반드시 깨끗하게 정리해야 한다.", "answer": "O" },
  { "question": "용접 후에도 용접부는 계속해서 열 팽창을 겪는다.", "answer": "O" },
  { "question": "알루미늄 용접 시 비활성 가스를 사용하지 않으면 산화될 가능성이 높다.", "answer": "O" },
  { "question": "TIG 용접은 알루미늄과 같은 비철 금속 용접에 적합하다.", "answer": "O" },
  { "question": "용접봉의 길이가 짧아지면 아크의 길이도 짧아진다.", "answer": "O" },
  { "question": "용접 중 용접부가 과열되면 금속의 구조적 특성이 변화할 수 있다.", "answer": "O" },
  { "question": "CO2 용접에서 과도한 전류는 스패터 발생을 증가시킨다.", "answer": "O" },
  { "question": "용접 후 열처리는 용접부의 내부 응력을 감소시킨다.", "answer": "O" },
  { "question": "아크 용접에서는 전류가 너무 낮으면 용접 깊이가 얕아질 수 있다.", "answer": "O" },
  { "question": "용접 후 균열 방지를 위해 천천히 냉각시키는 것이 좋다.", "answer": "O" },
  { "question": "용접봉의 피복제는 용접 시 발생하는 가스를 흡수한다.", "answer": "X" },
  { "question": "용접 후 용접부의 품질을 검사하기 위해 비파괴 검사를 할 수 있다.", "answer": "O" },
  { "question": "용접 중 발생하는 연기는 용접부의 품질에 영향을 미치지 않는다.", "answer": "X" },
  { "question": "CO2 용접에서 전류가 부족하면 용접 깊이가 얕아진다.", "answer": "O" },
  { "question": "알루미늄 용접 시 과도한 전류는 용접부가 녹는 현상을 유발할 수 있다.", "answer": "O" },
  { "question": "TIG 용접에서 전극은 비소모성 전극을 사용한다.", "answer": "O" },
  { "question": "용접 후 용접부의 경도는 냉각 속도에 영향을 받는다.", "answer": "O" },
  { "question": "용접봉의 선택은 용접 대상 금속의 특성에 따라 다르다.", "answer": "O" },
  { "question": "스테인리스 스틸을 용접할 때는 특수한 전극이 필요하지 않다.", "answer": "X" },
  { "question": "용접부가 너무 빠르게 냉각되면 취성이 증가할 수 있다.", "answer": "O" },
  { "question": "가스 용접 시 사용되는 가스 통은 작업장에서 고정해 두어야 한다.", "answer": "O" },
  { "question": "용접 중 발생하는 전기 아크는 전자기파를 방출한다.", "answer": "O" },
  { "question": "용접 후 용접부에 발생한 잔여 응력은 재료의 특성을 약화시킨다.", "answer": "O" },
  { "question": "아크 용접의 전극 피복은 산소의 침투를 막아준다.", "answer": "O" },
  { "question": "알루미늄 용접 시 비활성 가스 대신 활성 가스를 사용할 수 있다.", "answer": "X" },
  { "question": "TIG 용접에서는 높은 전류로 작업하면 전극 소모가 빨라진다.", "answer": "O" },
  { "question": "용접 후 용접부가 균열을 방지하기 위해 열처리를 수행할 수 있다.", "answer": "O" },
  { "question": "가스 용접 시 불꽃이 일정하지 않으면 가스 혼합 비율이 잘못되었을 수 있다.", "answer": "O" },
  { "question": "용접 전 극간의 거리를 너무 넓게 하면 용접부가 약해질 수 있다.", "answer": "O" },
  { "question": "용접기의 용량을 초과해 사용해도 큰 문제가 없다.", "answer": "X" },
  { "question": "스테인리스 용접 후 표면에 산화 피막이 형성될 수 있다.", "answer": "O" },
  { "question": "용접 후 열처리 없이 바로 사용해도 용접부의 내구성에는 문제가 없다.", "answer": "X" },
  { "question": "CO2 용접은 비철 금속 용접에 적합하다.", "answer": "X" },
  { "question": "용접 중 아크 길이를 조절하면 용접 깊이와 품질에 영향을 줄 수 있다.", "answer": "O" },
  { "question": "용접할 때, 용접봉이 녹지 않으면 용접이 제대로 되지 않는다.", "answer": "O" },
  { "question": "용접 후 슬래그가 남아 있으면 용접 강도가 저하될 수 있다.", "answer": "O" },
  { "question": "TIG 용접에서 전극이 소모되면 전극을 교체해야 한다.", "answer": "O" },
  { "question": "가스 용접에서 아세틸렌 대신 산소만 사용해도 문제가 없다.", "answer": "X" },
  { "question": "용접 작업 중 전극의 각도는 용접 속도에 영향을 미친다.", "answer": "O" },
  { "question": "용접 후 용접부의 표면 처리는 산화를 방지하는 데 도움이 된다.", "answer": "O" },
  { "question": "플럭스 코어드 와이어는 주로 저온 용접에서 사용된다.", "answer": "X" },
  { "question": "용접 중 발생하는 스패터는 냉각 후 제거하는 것이 좋다.", "answer": "O" },
  { "question": "용접 전, 용접 부위의 표면을 깨끗이 해야 용접 품질이 좋아진다.", "answer": "O" },
  { "question": "TIG 용접은 일반적으로 스테인리스 용접에 사용되지 않는다.", "answer": "X" },
  { "question": "CO2 용접에서는 주로 이산화탄소 가스를 사용한다.", "answer": "O" },
  { "question": "용접 후 열처리는 용접부의 강도를 높이는 데 도움이 된다.", "answer": "O" },
  { "question": "알루미늄 용접은 다른 금속보다 산화가 쉽게 일어난다.", "answer": "O" },
  { "question": "용접 중 전극이 용접물에 너무 가까이 닿으면 불량이 발생할 수 있다.", "answer": "O" },
  { "question": "스테인리스 용접 시 강한 자성은 용접에 영향을 미친다.", "answer": "X" },
  { "question": "용접 중 발생하는 흄은 건강에 무해하다.", "answer": "X" },
  { "question": "용접 후 용접부의 불순물은 그대로 두어도 무관하다.", "answer": "X" },
  { "question": "알루미늄 용접 시 불활성 가스를 사용하는 것이 좋다.", "answer": "O" },
  { "question": "아크 용접에서 전극이 소모될 경우 새로운 전극으로 교체해야 한다.", "answer": "O" },
  { "question": "용접 중 가연성 가스가 누출되면 즉시 작업을 중단해야 한다.", "answer": "O" },
  { "question": "용접 후 용접부의 균열 검사를 통해 용접 품질을 확인할 수 있다.", "answer": "O" },
  { "question": "CO2 용접 시 과도한 압력은 용접 품질에 영향을 줄 수 있다.", "answer": "O" },
  { "question": "용접 후 빠르게 냉각시키면 용접부의 강도가 높아진다.", "answer": "X" },
  { "question": "용접 작업 중 발생하는 연기는 청력에 해를 끼치지 않는다.", "answer": "X" }
]




let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

// 퀴즈 시작 함수: 문제 리스트에서 랜덤으로 20문제 선택
function startQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  quizQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 20); // 랜덤으로 20개 선택
  document.getElementById("score").innerText = score;
  document.querySelector(".start-button").style.display = "none";
  document.getElementById("quiz-content").style.display = "block";
  loadNextQuestion();
}

// 다음 문제 로딩 함수
function loadNextQuestion() {
  if (currentQuestionIndex < quizQuestions.length) {
    document.getElementById("question-text").innerText = quizQuestions[currentQuestionIndex].question;
    document.getElementById("result").innerText = "";
  } else {
    showFinalResult();
  }
}

// 정답 제출 함수
function submitAnswer(selectedAnswer) {
  if (currentQuestionIndex < quizQuestions.length) {
    const correctAnswer = quizQuestions[currentQuestionIndex].answer;
    if (selectedAnswer === correctAnswer) {
      score++;
      document.getElementById("result").innerText = "정답입니다!";
    } else {
      document.getElementById("result").innerText = "오답입니다!";
    }
    document.getElementById("score").innerText = score;
    currentQuestionIndex++;
  }
}

// 최종 결과 표시 함수
function showFinalResult() {
  document.getElementById("quiz-content").style.display = "none";
  document.querySelector(".start-button").style.display = "block";
  document.querySelector(".start-button").innerText = "다시 시작";
  document.getElementById("question-text").innerText = `퀴즈가 종료되었습니다! 최종 점수: ${score} / 20`;
}
