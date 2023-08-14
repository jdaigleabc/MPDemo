import Image from 'next/image'
import recipes from './recipes.json'
import CircleHeart from './icons/CircleHeart'
import Vegetarian from './icons/Vegetarian'
import Spicy from './icons/Spicy'
import Search from './icons/Search'
import Clock from './icons/Clock'
import RecipesIcon from './icons/Recipes'
import Star from './icons/Star'
import Ellipsis from './icons/Ellipsis'
import Protein from './icons/Protein'
import Carbs from './icons/Carbs'
import Cancel from './icons/Cancel'
import CircleCheck from './icons/CircleCheck'
import Pot from './icons/Pot'

export default function Recipes() {
    return <div style={{ maxWidth: '1000px', padding: '50px' }}>
        <div style={{ border: '1px solid #cccccc', backgroundColor: 'white', padding: '10px', fontWeight: 200, display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            Search...
            <Search
                size={"20"}
                color="#cccccc"
            />
        </div>
        <div className='zoom' style={{ padding: '20px 10px', borderRadius: '10px', marginBottom: '20px', display: 'flex', flexDirection: 'column', backgroundColor: 'white', boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)' }}>
            <div style={{ fontSize: '20px', fontWeight: '700' }}>
                Your Filters
            </div>
            <div style={{ fontWeight: 300, display: 'flex', alignItems: 'center' }}>
                Search terms from your meal plan.
            </div>
            <div style={{ display: 'flex', marginTop: '20px', gap: '10px' }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ backgroundColor: '#004F98', display: 'flex', alignItems: 'center', padding: '5px 10px', borderRadius: '10px 0px 0px 10px' }}>
                        <Search
                            size={24}
                            color='white'
                        />
                    </div>
                    <div style={{ backgroundColor: '#5D8AA8', display: 'flex', alignItems: 'center', color: 'white', padding: '5px 15px', fontSize: '14px', borderRadius: '0px 10px 10px 0px' }}>
                        Black Bean
                    </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ backgroundColor: '#CC5500', display: 'flex', alignItems: 'center', padding: '5px 10px', borderRadius: '10px 0px 0px 10px' }}>
                        <Pot
                            size={24}
                            color='white'
                        />
                    </div>
                    <div style={{ backgroundColor: '#DAA06D', display: 'flex', alignItems: 'center', color: 'white', padding: '5px 15px', fontSize: '14px', borderRadius: '0px 10px 10px 0px' }}>
                        Servings: 4+
                    </div>
                </div>
            </div>
        </div>
        <div className='zoom' style={{ padding: '20px 10px', borderRadius: '10px', marginBottom: '20px', display: 'flex', flexDirection: 'column', backgroundColor: 'white', boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)' }}>
            <div style={{ fontSize: '20px', fontWeight: '700' }}>
                Meal Plan Filters
            </div>
            <div style={{ fontWeight: 300, display: 'flex', alignItems: 'center' }}>
                Search terms from your meal plan.
            </div>
            <div style={{ display: 'flex', marginTop: '20px', gap: '10px' }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ backgroundColor: '#004F98', display: 'flex', alignItems: 'center', padding: '5px 10px', borderRadius: '10px 0px 0px 10px' }}>
                        <RecipesIcon
                            size={24}
                            color='white'
                        />
                    </div>
                    <div style={{ backgroundColor: '#5D8AA8', display: 'flex', alignItems: 'center', color: 'white', padding: '5px 15px', fontSize: '14px', borderRadius: '0px 10px 10px 0px' }}>
                        Breakfast
                    </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ backgroundColor: '#CC5500', display: 'flex', alignItems: 'center', padding: '5px 10px', borderRadius: '10px 0px 0px 10px' }}>
                        <Protein
                            size={24}
                            color='white'
                        />
                    </div>
                    <div style={{ backgroundColor: '#DAA06D', display: 'flex', alignItems: 'center', color: 'white', padding: '5px 15px', fontSize: '14px', borderRadius: '0px 10px 10px 0px' }}>
                        Protein: 20-40g
                    </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ backgroundColor: '#CC5500', display: 'flex', alignItems: 'center', padding: '5px 10px', borderRadius: '10px 0px 0px 10px' }}>
                        <Carbs
                            size={24}
                            color='white'
                        />
                    </div>
                    <div style={{ backgroundColor: '#DAA06D', display: 'flex', alignItems: 'center', color: 'white', padding: '5px 15px', fontSize: '14px', borderRadius: '0px 10px 10px 0px' }}>
                        Carbs: 0-10g
                    </div>
                </div>
            </div>
        </div>
        <div className='zoom' style={{ padding: '20px 10px', borderRadius: '10px', marginBottom: '20px', display: 'flex', flexDirection: 'column', backgroundColor: 'white', boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)' }}>
            <div style={{ fontSize: '20px', fontWeight: '700' }}>
                Member Filters
            </div>
            <div style={{ fontWeight: 300, display: 'flex', alignItems: 'center' }}>
                Member preferences from their questionnaire
            </div>
            <div style={{ display: 'flex', marginTop: '20px', gap: '10px' }}>
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
                    <div style={{ backgroundColor: '#00563B', display: 'flex', alignItems: 'center', padding: '5px 10px', borderRadius: '10px 0px 0px 10px' }}>
                        <CircleCheck
                            size={24}
                            color='white'
                        />
                    </div>
                    <div style={{ backgroundColor: '#17B169', display: 'flex', alignItems: 'center', color: 'white', padding: '5px 15px', fontSize: '14px', borderRadius: '0px 10px 10px 0px' }}>
                        Couscous
                    </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ backgroundColor: 'firebrick', display: 'flex', alignItems: 'center', padding: '5px 10px', borderRadius: '10px 0px 0px 10px' }}>
                        <Cancel
                            size={24}
                            color='white'
                        />
                    </div>
                    <div style={{ backgroundColor: '#c96464', display: 'flex', alignItems: 'center', color: 'white', padding: '5px 15px', fontSize: '14px', borderRadius: '0px 10px 10px 0px' }}>
                        Tofu
                    </div>
                </div>
            </div>
        </div>
        {
            recipes.data.recipes.map((recipe, index) => {
                const image = recipe.images[0]?.path || 'https://app.simplyforlife.com/static/media/placeholder.bd74effd4b61ad3de8c2.jpg?width=400'

                return <div key={index} className='zoom' style={{ borderRadius: '10px', marginBottom: '20px', display: 'flex', backgroundColor: 'white', boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)' }}>
                    <div style={{ padding: '10px' }}>
                        <Image
                            src={image}
                            alt={recipe.name}
                            width={300}
                            height={300}
                            style={{ height: 'auto', borderRadius: '10px', maxHeight: '300px' }}
                        />
                    </div>
                    <div style={{ padding: '20px 10px', display: 'flex', flexGrow: 1, flexDirection: 'column', gap: '5px' }}>
                        <div style={{ fontSize: '20px', fontWeight: '700', display: 'flex', justifyContent: 'space-between' }}>
                            {recipe.name}
                            <Ellipsis size={18} color={'#36454f'} />
                        </div>
                        <div style={{ fontWeight: 300, display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div>{index + 5} Ingredients</div>
                            <div style={{ display: 'flex', gap: '5px' }}>
                                <Star color={'#17B169'} size={20} />
                                <Star color={'#17B169'} size={20} />
                                <Star color={'#17B169'} size={20} />
                                <Star color={index < 2 ? '#17B169' : '#aaaaaa'} size={20} />
                                <Star color={'#aaaaaa'} size={20} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', margin: '10px 0px', gap: '5px' }}>
                            <div style={{ border: '1px solid firebrick' }}>
                                <div style={{ color: 'firebrick', display: 'flex', width: '100px', height: '50px', fontSize: '20px', fontWeight: 700, alignItems: 'center', justifyContent: 'center' }}>15g</div>
                                <div style={{ display: 'flex', backgroundColor: 'firebrick', color: 'white', fontWeight: 700, justifyContent: 'center' }}>Proteins</div>
                            </div>
                            <div style={{ border: '1px solid #004F98' }}>
                                <div style={{ color: '#004F98', display: 'flex', width: '100px', height: '50px', fontSize: '20px', fontWeight: 700, alignItems: 'center', justifyContent: 'center' }}>15g</div>
                                <div style={{ display: 'flex', backgroundColor: '#004F98', color: 'white', fontWeight: 700, justifyContent: 'center' }}>Fats</div>
                            </div>
                            <div style={{ border: '1px solid #CC5500' }}>
                                <div style={{ color: '#CC5500', display: 'flex', width: '100px', height: '50px', fontSize: '20px', fontWeight: 700, alignItems: 'center', justifyContent: 'center' }}>15g</div>
                                <div style={{ display: 'flex', backgroundColor: '#CC5500', color: 'white', fontWeight: 700, justifyContent: 'center' }}>Carbs</div>
                            </div>
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
                                    {(index * 5) + index + 5} Minutes
                                </div>
                            </div>
                            {index % 3 == 0 && <div style={{ display: 'flex' }}>
                                <div style={{ backgroundColor: '#00563B', display: 'flex', alignItems: 'center', padding: '5px 10px', borderRadius: '10px 0px 0px 10px' }}>
                                    <Vegetarian
                                        size={24}
                                        color='white'
                                    />
                                </div>
                                <div style={{ backgroundColor: '#17B169', display: 'flex', alignItems: 'center', color: 'white', padding: '5px 15px', fontSize: '14px', borderRadius: '0px 10px 10px 0px' }}>
                                    Vegetarian
                                </div>
                            </div>}
                            {index % 2 == 0 && <div style={{ display: 'flex' }}>
                                <div style={{ backgroundColor: 'firebrick', display: 'flex', alignItems: 'center', padding: '5px 10px', borderRadius: '10px 0px 0px 10px' }}>
                                    <Spicy
                                        size={24}
                                        color='white'
                                    />
                                </div>
                                <div style={{ backgroundColor: '#c96464', display: 'flex', alignItems: 'center', color: 'white', padding: '5px 15px', fontSize: '14px', borderRadius: '0px 10px 10px 0px' }}>
                                    Spicy
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            })
        }
    </div >
}
