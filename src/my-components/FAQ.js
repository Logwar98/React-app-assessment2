import Questions from './faqs.json';
import{ useState } from 'react';

function FAQ() {
    const [enteredKeywords, setEnteredKeywords] = useState('');
    let id = 0;
    return (<>
        <div style={{ minHeight: '60vh' }}>
            <h1>Frequently Asked Questions</h1>
            <div className='row'>
                <input className='col-11 m-3'
                type='text'
                name='search'
                onChange={(e) => {setEnteredKeywords(e.target.value)} } placeholder='Keywords' >
                </input>
            </div>

            <div>
                {Questions.filter(
                    question => question.question.toLowerCase().includes(enteredKeywords.toLowerCase())
                    || question.answer.toLowerCase().includes(enteredKeywords.toLowerCase())
                ).map(
                    question => {
                        return (
                            <div className='bg-warning p-3 m-2' key={id++}>
                                <h4>{question.question}</h4>
                                <p>{question.answer}</p>
                            </div>
                        );
                    }
                )}
            </div>
        </div>
    </>);
}
export default FAQ;