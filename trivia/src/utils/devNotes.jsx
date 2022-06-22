
const account = useSelector((state) => state.account)
//  ? Redux Examlple
const dispatch = useDispatch();
const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch)
//  ? Redux Examlple



// * React State Form
const [difficulty, setDifficulty] = useState('medium')
const [numberQuest, setNumberQuest] = useState(0);
const [category, setCategories] = useState([]);
const [value, setValue] = useState([]);
// * React State Form

const handleChangeDifficulty = (event) => {
    setDifficulty(event.target.value)
}

const handleChangeNumber = (event) => {
    setNumberQuest(event.target.value)
}

const handleChangeCatego = (event) => {
    setCategories(event.target.value)
}

const checkForValeus = async () => {
    console.log(difficulty, "difficulty");
    console.log(numberQuest, "numberQuest");
    console.log(category, "Category");
}

useEffect(() => {
    // setCategories(categoriesJSON)
    checkForValeus()


}, [])




    < form form className = 'startForm__container' >
            <h3>Difficulty</h3>
            <div className="start__difficulty-container">
                <div className="start__difficulty-input">
                    <input
                        checked={difficulty === 'easy'}
                        onChange={handleChangeDifficulty}
                        type="radio"
                        name="difficulty"
                        value="easy"
                        unselectable='true'
                    />
                    <label htmlFor='easy'>Easy</label>
                </div>
                <div className="start__difficulty-input">
                    <input
                        checked={difficulty === 'medium'}
                        onChange={handleChangeDifficulty}
                        type="radio"
                        name="difficulty"
                        value="medium"
                    />
                    <label htmlFor='medium'>Medium</label>
                </div>
                <div className="start__difficulty-input">
                    <input
                        checked={difficulty === 'hard'}
                        onChange={handleChangeDifficulty}
                        type="radio"
                        name="difficulty"
                        value="hard"
                    />
                    <label htmlFor='hard'>Hard</label>
                </div >
            </div >
            <h3>Number of questions</h3>
            <div className="page__slider">
                <input className='page__slider-input' type="range" min="1" max="100" value={value}
                    onChange={({ target: { value: radius } }) => {

                        setValue(radius);
                    }} />
                <div className="page__buble">
                    {value}
                </div>
            </div>
            <div className="start__categories">

            </div>
            <h3>Categories</h3>
            <div className="start__categories-container">
                <ul>
                    <div className="start__categories-option">



                        {/* <label className='start__select-catego' htmlFor="arts"> Arts</label> */}
                    </div>
                </ul>



            </div>

            <button type='submit' className='start__button-submit'>START</button>


{/* 
            <Link to="/gamePage"
                className="link">
                <button className='start__button-submit'>Question Page</button>
            </Link>
            <Link to="/scorePage"
                className="link">
                <button className='start__button-submit'>Resume</button>
            </Link> */}

        </ >

