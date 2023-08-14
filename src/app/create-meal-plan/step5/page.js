import Link from 'next/link'
import Image from 'next/image'

export default function QuestionnaireStep1() {
    return <div style={{ maxWidth: '600px', padding: '50px', backgroundColor: 'white' }}>
        <div style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '20px', marginBottom: '20px' }}>
            Automation Options
        </div>
        <div style={{ textAlign: 'left', marginBottom: '20px' }}>

        </div>
        <div style={{ display: 'flex', paddingBottom: '20px', marginBottom: '20px', borderBottom: '1px solid #cccccc' }}>
            <div style={{ flexGrow: 1, fontWeight: 600 }}>
                Recipes per section
            </div>
            <div style={{ flexGrow: 2, textAlign: 'right' }}>
                3
            </div>
        </div>
        <div style={{ display: 'flex', paddingBottom: '20px', marginBottom: '20px', borderBottom: '1px solid #cccccc' }}>
            <div style={{ flexGrow: 1, fontWeight: 600 }}>
                Recipe time limits
            </div>
            <div style={{ flexGrow: 2, textAlign: 'right' }}>
                0-30 min
            </div>
        </div>
        <div style={{ display: 'flex', paddingBottom: '20px', marginBottom: '20px', borderBottom: '1px solid #cccccc' }}>
            <div style={{ flexGrow: 1, fontWeight: 600 }}>
                Recipe servings
            </div>
            <div style={{ flexGrow: 2, textAlign: 'right' }}>
                Family (4+)
            </div>
        </div>
        <div style={{ display: 'flex', paddingBottom: '20px', marginBottom: '20px', borderBottom: '1px solid #cccccc' }}>
            <div style={{ flexGrow: 1, fontWeight: 600 }}>
                Recipe max ingredient count
            </div>
            <div style={{ flexGrow: 2, textAlign: 'right' }}>
                10
            </div>
        </div>
        <div style={{ display: 'flex', paddingBottom: '20px', marginBottom: '20px', borderBottom: '1px solid #cccccc' }}>
            <div style={{ flexGrow: 1, fontWeight: 600 }}>
                Recipe Rating
            </div>
            <div style={{ flexGrow: 2, textAlign: 'right' }}>
                4+
            </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '60px', alignItems: 'center' }}>
            <Link href="./step4" style={{ color: '#aaaaaa' }}>
                Previous
            </Link>
            <Link href="/">
                <div style={{ borderRadius: '25px', padding: '10px 30px', backgroundColor: '#0F52BA', color: 'white' }}>Next Step &gt;&gt;</div>
            </Link>
        </div>
    </div>
}
