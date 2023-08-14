import Link from 'next/link'
import Calendar from './icons/Calendar'

export default function QuestionnaireStep1() {
    return <div style={{ maxWidth: '600px', padding: '50px', backgroundColor: 'white' }}>
        <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>
            Tell us a little more about your goals.
        </div>
        <div style={{ textAlign: 'center', fontWeight: 300, marginTop: '10px', marginBottom: '60px' }}>
            Feel free to share a much or as little as you like.
        </div>
        <div>
            <div style={{ border: '1px solid #aaaaaa', padding: '10px', color: '#aaaaaa',height:'350px' }}>
                I would love to...
            </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '60px', alignItems: 'center' }}>
            <Link href="./step1" style={{ color: '#aaaaaa' }}>
                Previous
            </Link>
            <Link href="./step3">
                <div style={{ borderRadius: '25px', padding: '10px 30px', backgroundColor: '#0F52BA', color: 'white' }}>Next Step &gt;&gt;</div>
            </Link>
        </div>
    </div>
}
