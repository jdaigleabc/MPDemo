import Image from 'next/image'
import CircleHeart from './icons/CircleHeart'
import Vegetarian from './icons/Vegetarian'
import Spicy from './icons/Spicy'
import Search from './icons/Search'
import Clock from './icons/Clock'
import Ellipsis from './icons/Ellipsis'
import Star from './icons/Star'
import Chart from './icons/Chart'
import Recipes from './icons/Recipes'
import MealPlan from './icons/MealPlan'
import Share from './icons/Share'
import Save from './icons/Files'


export default function RecipeDetails() {
    const image = 'https://app-api.simplyforlife.com/recipeImages/5a2a8f0f-7cfd-4912-b122-ffe9837b6e33.jpeg?width=700'

    const ingredients = <div style={{ display: 'flex', flexGrow: 1, flexDirection: 'column', gap: '5px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center', fontSize: '20px', color: 'white', padding: '10px', fontWeight: '700', textAlign: 'center', backgroundColor: '#17B169', borderRadius: '10px 10px 0px 0px' }}>
            Ingredients <Recipes size={30} color={"white"} />
        </div>
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                <div style={{ borderBottom: '1px solid #eeeeee', padding: '5px 10px', marginBottom: '5px', flex: 1 }}>
                    <div style={{ fontWeight: 400 }}>4 Filet mignons (6oz)</div>
                    <div style={{ fontSize: '12px' }}></div>
                </div>
            </div>
            <div style={{ display: 'flex', gap: '5px' }}>
                <div style={{ borderBottom: '1px solid #eeeeee', padding: '5px 10px', marginBottom: '5px', flex: 1 }}>
                    <div style={{ fontWeight: 400 }}>2 Roma tomatoes</div>
                    <div style={{ fontSize: '12px' }}>Sliced 1/4 inch thick</div>
                </div>
            </div>
            <div style={{ display: 'flex', gap: '5px' }}>
                <div style={{ borderBottom: '1px solid #eeeeee', padding: '5px 10px', marginBottom: '5px', flex: 1 }}>
                    <div style={{ fontWeight: 400 }}>4 oz Fresh mozzarella</div>
                    <div style={{ fontSize: '12px' }}>Cut into four slices</div>
                </div>
            </div>
            <div style={{ display: 'flex', gap: '5px' }}>
                <div style={{ borderBottom: '1px solid #eeeeee', padding: '5px 10px', marginBottom: '5px', flex: 1 }}>
                    <div style={{ fontWeight: 400 }}>8 Basil leaves</div>
                    <div style={{ fontSize: '12px' }}></div>
                </div>
            </div>
            <div style={{ display: 'flex', gap: '5px' }}>
                <div style={{ borderBottom: '1px solid #eeeeee', padding: '5px 10px', marginBottom: '5px', flex: 1 }}>
                    <div style={{ fontWeight: 400 }}>SFL Extra Virgin Olive Oil</div>
                    <div style={{ fontSize: '12px' }}></div>
                </div>
            </div>
            <div style={{ display: 'flex', gap: '5px' }}>
                <div style={{ borderBottom: '1px solid #eeeeee', padding: '5px 10px', marginBottom: '5px', flex: 1 }}>
                    <div style={{ fontWeight: 400 }}>Salt</div>
                    <div style={{ fontSize: '12px' }}></div>
                </div>
            </div>
            <div style={{ display: 'flex', gap: '5px' }}>
                <div style={{ borderBottom: '0px solid #eeeeee', padding: '5px 10px', marginBottom: '5px', flex: 1 }}>
                    <div style={{ fontWeight: 400 }}>Pepper</div>
                    <div style={{ fontSize: '12px' }}></div>
                </div>
            </div>
            <div style={{ fontWeight: 600, marginTop: '20px' }}>
                Reduced balsamic vinegar for drizzle
            </div>
            <div style={{ display: 'flex', gap: '5px' }}>
                <div style={{ borderBottom: '1px solid #eeeeee', padding: '5px 10px', marginBottom: '5px', flex: 1 }}>
                    <div style={{ fontWeight: 400 }}>1 Cup Balsamic vinegar</div>
                    <div style={{ fontSize: '12px' }}></div>
                </div>
            </div>
            <div style={{ display: 'flex', gap: '5px' }}>
                <div style={{ borderBottom: '0px solid #eeeeee', padding: '5px 10px', marginBottom: '5px', flex: 1 }}>
                    <div style={{ fontWeight: 400 }}>1.5 Tsp Organic honey</div>
                    <div style={{ fontSize: '12px' }}></div>
                </div>
            </div>
        </div>
    </div >


    const directions = <div style={{ display: 'flex', flexGrow: 1, flexDirection: 'column', gap: '5px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center', fontSize: '20px', color: 'white', padding: '10px', fontWeight: '700', textAlign: 'center', backgroundColor: '#17B169', borderRadius: '10px 10px 0px 0px' }}>
            Directions <MealPlan size={30} color={"white"} />
        </div>
        <div style={{ padding: '20px' }}>
            <div style={{ fontWeight: 700 }}>
                Balsamic reduction:
            </div>
            <div style={{ fontWeight: 300 }}>
                <ol style={{
                    listStyleType: "decimal",
                    listStylePosition: "outside",
                    marginBlockStart: '1em',
                    marginBlockEnd: '1em',
                    marginInlineStart: '0px',
                    marginInlineEnd: '0px',
                    paddingInlineStart: '40px'
                }}>
                    <li>Stir balsamic vinegar and honey together in a small saucepan and place over high heat. Bring to a boil, reduce heat to low, and simmer until the vinegar mixture has reduced to 1/3 Cup, about 10 minutes. Set the balsamic reduction aside to cool.</li>
                </ol>
                <div style={{ fontWeight: 700 }}>
                    Preheat grill to high.
                </div>
                <ol style={{
                    listStyleType: "decimal",
                    listStylePosition: "outside",
                    marginBlockStart: '1em',
                    marginBlockEnd: '1em',
                    marginInlineStart: '0px',
                    marginInlineEnd: '0px',
                    paddingInlineStart: '40px'
                }}>
                    <li>
                        <p>Season filets with salt and pepper and lightly brush with olive oil.</p>
                    </li>
                    <li>
                        <p>Place steaks on grill, reduce heat to medium. Cover and cook for 5 minutes per side. Reduce to low.</p>
                    </li>
                    <li>
                        <p>Top with 1 tomato slice, 1 basil leaf, 1 slice mozzarella, another basil leaf, and another slice of tomato. Close the cover and grill for another 3-5 minutes or  to desired doneness.</p>
                    </li>
                    <li>
                        <p>Remove from heat to a platter, let rest for at least 5 minutes, drizzle with olive oil and reduced balsamic vinegar before serving. <em>Enjoy!</em></p>
                    </li>
                </ol>
            </div>
        </div>
    </div>


    const nutrition = <div style={{ margin: '40px 0px 20px 0px' }}>
        <div style={{ display: 'flex', gap: '5px' }}>
            <div style={{ flex: 2, border: '1px solid #17B169', backgroundColor: 'white' }}>
                <div style={{ color: '#17B169', display: 'flex', height: '30px', fontSize: '16px', fontWeight: 700, alignItems: 'center', justifyContent: 'center' }}>0.75 Servings*</div>
                <div style={{ display: 'flex', backgroundColor: '#17B169', color: 'white', fontWeight: 400, justifyContent: 'center' }}>Recommend Portion</div>
            </div>
            <div style={{ flex: 1, border: '1px solid #c96464', backgroundColor: 'white' }}>
                <div style={{ color: '#c96464', display: 'flex', height: '30px', fontSize: '16px', fontWeight: 700, alignItems: 'center', justifyContent: 'center' }}>15g</div>
                <div style={{ display: 'flex', backgroundColor: '#c96464', color: 'white', fontWeight: 400, justifyContent: 'center' }}>Proteins</div>
            </div>
            <div style={{ flex: 1, border: '1px solid #5D8AA8', backgroundColor: 'white' }}>
                <div style={{ color: '#5D8AA8', display: 'flex', height: '30px', fontSize: '16px', fontWeight: 700, alignItems: 'center', justifyContent: 'center' }}>15g</div>
                <div style={{ display: 'flex', backgroundColor: '#5D8AA8', color: 'white', fontWeight: 400, justifyContent: 'center' }}>Fats</div>
            </div>
            <div style={{ flex: 1, border: '1px solid #DAA06D', backgroundColor: 'white' }}>
                <div style={{ color: '#DAA06D', display: 'flex', height: '30px', fontSize: '16px', fontWeight: 700, alignItems: 'center', justifyContent: 'center' }}>15g</div>
                <div style={{ display: 'flex', backgroundColor: '#DAA06D', color: 'white', fontWeight: 400, justifyContent: 'center' }}>Carbs</div>
            </div>
        </div>
        <div style={{ color: '#666', fontWeight: 300 }}>
            *Calculated based on your questionnaire. Please consult your meal plan and coach for specifics.
        </div>
    </div>

    return <div style={{ maxWidth: '1000px', padding: '50px' }}>
        <div style={{ borderRadius: '10px', marginBottom: '20px', display: 'flex', backgroundColor: 'white', boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)' }}>
            <div style={{ padding: '10px' }}>
                <Image
                    src={image}
                    alt={'test'}
                    width={300}
                    height={300}
                    style={{ height: 'auto', borderRadius: '10px', maxHeight: '300px' }}
                />
            </div>
            <div style={{ padding: '20px 10px', display: 'flex', flexGrow: 1, flexDirection: 'column', gap: '5px' }}>
                <div style={{ fontSize: '20px', fontWeight: '700', display: 'flex', justifyContent: 'space-between' }}>
                    Grilled Caprese Filets Mignons
                    <Ellipsis size={18} color={'#36454f'} />
                </div>
                <div style={{ fontWeight: 300, display: 'flex', alignItems: 'center' }}>
                    9 Ingredients, 4 servings
                </div>
                <div style={{ margin: '15px 0px', display: 'flex', gap: '5px' }}>
                    <Star color={'#17B169'} size={20} />
                    <Star color={'#17B169'} size={20} />
                    <Star color={'#17B169'} size={20} />
                    <Star color={'#17B169'} size={20} />
                    <Star color={'#aaaaaa'} size={20} />
                </div>
                <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ backgroundColor: '#CC5500', display: 'flex', alignItems: 'center', padding: '5px 10px', borderRadius: '10px 0px 0px 10px' }}>
                            <Clock
                                size={24}
                                color='white'
                            />
                        </div>
                        <div style={{ backgroundColor: '#DAA06D', display: 'flex', alignItems: 'center', color: 'white', padding: '5px 15px', fontSize: '14px', borderRadius: '0px 10px 10px 0px' }}>
                            20 Minutes
                        </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ backgroundColor: '#00563B', display: 'flex', alignItems: 'center', padding: '5px 10px', borderRadius: '10px 0px 0px 10px' }}>
                            <Vegetarian
                                size={24}
                                color='white'
                            />
                        </div>
                        <div style={{ backgroundColor: '#17B169', display: 'flex', alignItems: 'center', color: 'white', padding: '5px 15px', fontSize: '14px', borderRadius: '0px 10px 10px 0px' }}>
                            Vegetarian
                        </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ backgroundColor: 'firebrick', display: 'flex', alignItems: 'center', padding: '5px 10px', borderRadius: '10px 0px 0px 10px' }}>
                            <Spicy
                                size={24}
                                color='white'
                            />
                        </div>
                        <div style={{ backgroundColor: '#c96464', display: 'flex', alignItems: 'center', color: 'white', padding: '5px 15px', fontSize: '14px', borderRadius: '0px 10px 10px 0px' }}>
                            Spicy
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style={{ borderRadius: '10px', display: 'flex', margin: '40px 0px' }}>
            <div style={{ border: '1px solid #17B169', backgroundColor: '#17B169', padding: '5px 10px', flex: '1', textAlign: 'center', color: 'white', fontWeight: 600 }}> Ingredients & Directions</div>
            <div style={{ border: '1px solid #cccccc', backgroundColor: 'white', padding: '5px 10px', flex: '1', textAlign: 'center', color: '#cccccc', borderRadius: '0px 5px 5px 0px' }}>Nutritional Information</div>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
            <div style={{ flex: 1, borderRadius: '10px', marginBottom: '20px', display: 'flex', backgroundColor: 'white', boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)' }}>
                {directions}
            </div>
            <div style={{ flex: 1, borderRadius: '10px', marginBottom: '20px', display: 'flex', backgroundColor: 'white', boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)' }}>
                {ingredients}
            </div>
        </div>
    </div >
}
