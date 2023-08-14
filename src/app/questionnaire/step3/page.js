import Link from 'next/link'
import Calendar from './icons/Calendar'

export default function QuestionnaireStep1() {
    return <div style={{ maxWidth: '600px', padding: '50px', backgroundColor: 'white' }}>
        <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>
            Tell us a little bit about yourself.
        </div>
        <div style={{ textAlign: 'center', fontWeight: 300, marginTop: '10px', marginBottom: '60px' }}>
            This help us customize your weight loss plan.
        </div>
        <div style={{ borderRadius: '10px', display: 'flex', paddingBottom: '20px', marginBottom: '20px', borderBottom: '1px solid #eeeeee' }}>
            <div style={{ fontSize: '20px', fontWeight: 600, width: '300px' }}>
                Age
            </div>
            <div style={{ flexGrow: 1, border: '1px solid #cccccc', backgroundColor: 'white', padding: '5px 10px', flex: '1', textAlign: 'center', borderRadius: '5px 0px 0px 5px' }}>34</div>
            <div style={{ display: 'flex', border: '1px solid #0F52BA', backgroundColor: '#0F52BA', padding: '5px 10px', color: 'white', fontWeight: 600 }}>
                <Calendar size={20} color={'white'} />
            </div>
        </div>
        <div style={{ borderRadius: '10px', display: 'flex', paddingBottom: '20px', marginBottom: '20px', borderBottom: '1px solid #eeeeee' }}>
            <div style={{ fontSize: '20px', fontWeight: 600, width: '300px' }}>
                Height
            </div>
            <div style={{ flexGrow: 1, border: '1px solid #cccccc', backgroundColor: 'white', padding: '5px 10px', flex: '1', textAlign: 'center', borderRadius: '5px 0px 0px 5px' }}>5</div>
            <div style={{ border: '1px solid #0F52BA', backgroundColor: '#0F52BA', padding: '5px 10px', textAlign: 'center', color: 'white', fontWeight: 600 }}> Ft.</div>
            <div style={{ flexGrow: 1, border: '1px solid #cccccc', backgroundColor: 'white', padding: '5px 10px', flex: '1', textAlign: 'center', borderRadius: '5px 0px 0px 5px', marginLeft: '10px' }}>10</div>
            <div style={{ border: '1px solid #0F52BA', backgroundColor: '#0F52BA', padding: '5px 10px', textAlign: 'center', color: 'white', fontWeight: 600 }}> In.</div>
        </div>
        <div style={{ borderRadius: '10px', display: 'flex', paddingBottom: '20px', marginBottom: '20px', borderBottom: '1px solid #eeeeee' }}>
            <div style={{ fontSize: '20px', fontWeight: 600, width: '200px' }}>
                Sex
            </div>
            <div style={{ flexGrow: 1, border: '1px solid #cccccc', backgroundColor: 'white', padding: '5px 10px', flex: '1', textAlign: 'center', color: '#cccccc', borderRadius: '5px 0px 0px 5px' }}>Female</div>
            <div style={{ flexGrow: 1, border: '1px solid #0F52BA', backgroundColor: '#0F52BA', padding: '5px 10px', flex: '1', textAlign: 'center', color: 'white', fontWeight: 600 }}> Male</div>
            <div style={{ flexGrow: 1, border: '1px solid #cccccc', backgroundColor: 'white', padding: '5px 10px', flex: '1', textAlign: 'center', color: '#cccccc', borderRadius: '5px 0px 0px 5px' }}>Intersex</div>
        </div>
        <div style={{ borderRadius: '10px', display: 'flex', paddingBottom: '20px', marginBottom: '20px', borderBottom: '1px solid #eeeeee' }}>
            <div style={{ fontSize: '20px', fontWeight: 600, width: '300px' }}>
                Current Weight
            </div>
            <div style={{ flexGrow: 1, border: '1px solid #cccccc', backgroundColor: 'white', padding: '5px 10px', flex: '1', textAlign: 'center', borderRadius: '5px 0px 0px 5px' }}>456</div>
            <div style={{ display: 'flex', border: '1px solid #0F52BA', backgroundColor: '#0F52BA', padding: '5px 10px', color: 'white', fontWeight: 600 }}>
                Lbs.
            </div>
        </div>
        <div style={{ borderRadius: '10px', display: 'flex', paddingBottom: '20px', marginBottom: '20px', borderBottom: '1px solid #eeeeee' }}>
            <div style={{ fontSize: '20px', fontWeight: 600, width: '300px' }}>
                Goal Weight
            </div>
            <div style={{ flexGrow: 1, border: '1px solid #cccccc', backgroundColor: 'white', padding: '5px 10px', flex: '1', textAlign: 'center', borderRadius: '5px 0px 0px 5px' }}>234</div>
            <div style={{ display: 'flex', border: '1px solid #0F52BA', backgroundColor: '#0F52BA', padding: '5px 10px', color: 'white', fontWeight: 600 }}>
                Lbs.
            </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '60px', alignItems: 'center' }}>
            <Link href="./step2" style={{ color: '#aaaaaa' }}>
                Previous
            </Link>
            <Link href="./step4">
                <div style={{ borderRadius: '25px', padding: '10px 30px', backgroundColor: '#0F52BA', color: 'white' }}>Next Step &gt;&gt;</div>
            </Link>
        </div>
    </div>
}
