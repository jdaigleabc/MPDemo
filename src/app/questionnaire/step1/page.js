import Link from 'next/link'
import CircleCheck from './icons/CircleCheck'

export default function QuestionnaireStep1() {
    return <div style={{ maxWidth: '600px', padding: '50px', backgroundColor: 'white' }}>
        <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>
            What is your goal at Simply For life?
        </div>
        <div style={{ textAlign: 'center', fontWeight: 300, marginTop: '10px', marginBottom: '120px' }}>
            Select all that apply.
        </div>

        <div style={{ textAlign: 'center', border: '1px solid #0F52BA', padding: '10px', color: '#0F52BA', fontWeight: 600, borderRadius: '25px', marginBottom: '20px' }}>
            I want to have more energy.
        </div>
        <div style={{ display: 'flex', textAlign: 'center', border: '1px solid #0F52BA', backgroundColor: '#0F52BA', color: 'white', fontWeight: 600, borderRadius: '25px', marginBottom: '20px' }}>
            <div style={{ width: '50px' }}></div>
            <div style={{ flexGrow: 1, padding: '10px', textAlign: 'center' }}>I want to lose weight.</div>
            <div style={{ width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CircleCheck
                    size={30}
                    color={"white"}
                />
            </div>
        </div>
        <div style={{ textAlign: 'center', border: '1px solid #0F52BA', padding: '10px', color: '#0F52BA', fontWeight: 600, borderRadius: '25px', marginBottom: '20px' }}>
            I want to feel better.
        </div>
        <div style={{ display: 'flex', textAlign: 'center', border: '1px solid #0F52BA', backgroundColor: '#0F52BA', color: 'white', fontWeight: 600, borderRadius: '25px', marginBottom: '0px' }}>
            <div style={{ width: '50px' }}></div>
            <div style={{ flexGrow: 1, padding: '10px', textAlign: 'center' }}>Other</div>
            <div style={{ width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CircleCheck
                    size={30}
                    color={"white"}
                />
            </div>
        </div>
        <Link href="./step2">
            <div style={{ display: 'flex', justifyContent: 'end', marginTop: '120px' }}>
                <div style={{ borderRadius: '25px', padding: '10px 30px', backgroundColor: '#0F52BA', color: 'white' }}>Next Step &gt;&gt;</div>
            </div>
        </Link>
    </div>
}
