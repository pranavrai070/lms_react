import React,{useState,useEffect} from "react";
import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { DialogTitle } from "@mui/material";
import Button from "@mui/material/Button";
import * as api from "../../apis/index"; 


function AssessmentDialog({ open, onClose, assessment }) {

  console.log('getting assement detaisl',assessment);

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  // const [options,setOptions]=useState([]);
  const [score, setScore] = useState(null);

 useEffect(()=>{
  console.log("use efeet running");
  const fetchQuestions = async () => {
    try {
      const response = await api.questions(assessment.id);
      console.log("getting questions",response);
      setQuestions(response.data.questions);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };


  fetchQuestions();
 },[]);

  
const getOptions=(question_id)=>{

    for (const questionId of questions){
        if(questionId.id===question_id){
          return questionId.options.split(',');
        }
    }
}


  const handleSelectAnswer = (questionId, selectedOption) => {
    setAnswers(prevState => ({
      ...prevState,
      [questionId]: selectedOption,
    }));
  };


  const handleSubmitQuiz = () => {
    let score = 0;
    questions.forEach(question => {
      if (answers[question.id] === question.answer) {
        score += question.assesment;
      }
    });
    setScore(score);
  };

  const seeQ=()=>{
    console.log("getting questioons",questions);
    console.log('see ptions array',getOptions(1));
  }




  return (
    <>
         <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
         <React.Fragment>
          <DialogTitle>{assessment.title}</DialogTitle>
          <DialogContent>
            {questions.map(questionId => (
              <div key={questionId} className="mb-4">
                <h2 className="text-lg font-bold mb-2">Question {questionId.question}</h2>
                <div className="flex flex-col">
                  {getOptions(questionId.id).map(option => (
                    <button
                      key={option}
                      className={`bg-gray-200 text-gray-800 px-4 py-2 rounded mb-2 ${
                        answers[questionId] === option ? 'bg-blue-500 text-white' : ''
                      }`}
                      onClick={() => seeQ()}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </DialogContent>
        </React.Fragment>
      <DialogActions>
        <Button onClick={handleSubmitQuiz} className="bg-blue-500 text-white">Submit Quiz</Button>
        <Button onClick={onClose} className="bg-gray-500 text-white">Close</Button>
      </DialogActions>
      {score !== null && (
        <DialogContent>
          <h2>Your Score: {score}</h2>
        </DialogContent>
      )}
    </Dialog>
    </>
  );
}

export default AssessmentDialog;
