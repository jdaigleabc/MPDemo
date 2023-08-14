import Link from 'next/link'
import CircleCheck from './icons/CircleCheck'
import CircleDash from './icons/CircleDash'


export default function QuestionnaireStep1() {
    return <div style={{ maxWidth: '600px', padding: '50px', backgroundColor: 'white' }}>
        <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>
            What kinds of foods do you love to eat?
        </div>
        <div style={{ textAlign: 'center', fontWeight: 300, marginTop: '10px' }}>
            We&apos;ll try to include as many of your favourites as possible!
        </div>
        <div style={{ borderRadius: '10px', display: 'flex', marginBottom: '10px', marginTop: '60px', fontSize: '20px', fontWeight: 600 }}>
            Meat & Fish
        </div>
        <div style={{ display: 'flex', borderBottom: '1px solid #dddddd', marginBottom: '10px' }}>
            <div style={{ flexGrow: 1, padding: '10px' }}>Beef</div>
            <div style={{ width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CircleCheck
                    size={30}
                    color={"#17B169"}
                />
            </div>
        </div>
        <div style={{ display: 'flex', borderBottom: '1px solid #dddddd', marginBottom: '10px' }}>
            <div style={{ flexGrow: 1, padding: '10px' }}>Chicken</div>
            <div style={{ width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CircleDash
                    size={30}
                    color={"#cccccc"}
                />
            </div>
        </div>
        <div style={{ display: 'flex', borderBottom: '1px solid #dddddd', marginBottom: '10px' }}>
            <div style={{ flexGrow: 1, padding: '10px' }}>Salmon</div>
            <div style={{ width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CircleCheck
                    size={30}
                    color={"#17B169"}
                />
            </div>
        </div>
        <div style={{ borderRadius: '10px', display: 'flex', marginBottom: '10px', marginTop: '60px', fontSize: '20px', fontWeight: 600 }}>
            Fruits
        </div>
        <div style={{ display: 'flex', borderBottom: '1px solid #dddddd', marginBottom: '10px' }}>
            <div style={{ flexGrow: 1, padding: '10px' }}>Apples</div>
            <div style={{ width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CircleCheck
                    size={30}
                    color={"#17B169"}
                />
            </div>
        </div>
        <div style={{ display: 'flex', borderBottom: '1px solid #dddddd', marginBottom: '10px' }}>
            <div style={{ flexGrow: 1, padding: '10px' }}>Pears</div>
            <div style={{ width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CircleDash
                    size={30}
                    color={"#cccccc"}
                />
            </div>
        </div>
        <div style={{ display: 'flex', borderBottom: '1px solid #dddddd', marginBottom: '10px' }}>
            <div style={{ flexGrow: 1, padding: '10px' }}>Lemons</div>
            <div style={{ width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CircleCheck
                    size={30}
                    color={"#17B169"}
                />
            </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '60px', alignItems: 'center' }}>
            <Link href="./step4" style={{ color: '#aaaaaa' }}>
                Previous
            </Link>
            <Link href="./step6">
                <div style={{ borderRadius: '25px', padding: '10px 30px', backgroundColor: '#0F52BA', color: 'white' }}>Next Step &gt;&gt;</div>
            </Link>
        </div>
    </div>
}
