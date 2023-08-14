import Link from 'next/link'
import CircleCheck from './icons/CircleCheck'
import CircleDash from './icons/CircleDash'
import ToggleRight from './icons/ToggleRight'


export default function QuestionnaireStep1() {
    return <div style={{ maxWidth: '600px', padding: '50px', backgroundColor: 'white' }}>
        <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>
            Do you have any dietary restrictions?
        </div>
        <div style={{ textAlign: 'center', fontWeight: 300, marginTop: '10px', marginBottom: '60px' }}>
            We&apos;ll do our best to accomodate you!
        </div>
        <div style={{ display: 'flex', borderBottom: '1px solid #dddddd', fontWeight: 600 }}>
            <div style={{ flexGrow: 1, padding: '10px', display: 'flex', alignItems: 'center' }}>Gluten Free</div>
            <div style={{ paddingRight: '10px', display: 'flex', alignItems: 'center' }}>
                <CircleDash
                    size={30}
                    color={"#cccccc"}
                />
            </div>
        </div>
        <div style={{ display: 'flex', borderBottom: '1px solid #dddddd', fontWeight: 600 }}>
            <div style={{ flexGrow: 1, padding: '10px', display: 'flex', alignItems: 'center' }}>Dairy Free</div>
            <div style={{ paddingRight: '10px', display: 'flex', alignItems: 'center' }}>
                <CircleCheck
                    size={30}
                    color={"#17B169"}
                />
            </div>
        </div>
        <div style={{ display: 'flex', borderBottom: '1px solid #dddddd', fontWeight: 600 }}>
            <div style={{ flexGrow: 1, padding: '10px', display: 'flex', alignItems: 'center' }}>Pescatarian</div>
            <div style={{ paddingRight: '10px', display: 'flex', alignItems: 'center' }}>
                <CircleCheck
                    size={30}
                    color={"#17B169"}
                />
            </div>
        </div>
        <div style={{ display: 'flex', borderBottom: '1px solid #dddddd', fontWeight: 600 }}>
            <div style={{ flexGrow: 1, padding: '10px', display: 'flex', alignItems: 'center' }}>Vegetarian</div>
            <div style={{ paddingRight: '10px', display: 'flex', alignItems: 'center' }}>
                <CircleDash
                    size={30}
                    color={"#cccccc"}
                />
            </div>
        </div>
        <div style={{ display: 'flex', borderBottom: '1px solid #dddddd', fontWeight: 600 }}>
            <div style={{ flexGrow: 1, padding: '10px', display: 'flex', alignItems: 'center' }}>Vegan</div>
            <div style={{ paddingRight: '10px', display: 'flex', alignItems: 'center' }}>
                <CircleDash
                    size={30}
                    color={"#cccccc"}
                />
            </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '60px', alignItems: 'center' }}>
            <Link href="./step3" style={{ color: '#aaaaaa' }}>
                Previous
            </Link>
            <Link href="./step5">
                <div style={{ borderRadius: '25px', padding: '10px 30px', backgroundColor: '#0F52BA', color: 'white' }}>Next Step &gt;&gt;</div>
            </Link>
        </div>
    </div>
}
