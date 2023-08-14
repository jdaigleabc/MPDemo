import Link from 'next/link'
import Image from 'next/image'
import Edit from './icons/Edit'

export default function QuestionnaireStep1() {
    return <div style={{ maxWidth: '600px', padding: '50px', backgroundColor: 'white' }}>
        <div style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '20px', marginBottom: '20px' }}>
            Review Member Profile
        </div>
        <div style={{ display: 'flex', textAlign: 'center', gap: '25px', marginBottom: '20px' }}>
            <div style={{ width: '100px' }}>
                <Image src="/profile2.png" alt='test2' height={100} width={100} style={{ borderRadius: '20px', width: '100px', height: 'auto' }} />
            </div>
            <div style={{ display: 'flex', flexGrow: 1, flexDirection: 'column', paddingTop: '10px' }}>
                <div style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '20px' }}>
                    Bruce Sweeney
                </div>
                <div style={{ textAlign: 'left', color: '#aaaaaa' }}>
                    bruce.sweeney@simplyforlife.com
                </div>
            </div>
        </div>
        <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>
            00 Year old male, 6&apos;8, Moderately Active
        </div>
        <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px', marginBottom: '20px' }}>
            321 Lbs &gt;&gt;&gt; 300 Lbs
        </div>
        <div style={{ display: 'flex', paddingBottom: '20px', marginBottom: '20px', borderBottom: '1px solid #cccccc' }}>
            <div style={{ flexGrow: 1, fontWeight: 600 }}>
                Maintenance TDEE
            </div>
            <div style={{ flexGrow: 2, textAlign: 'right' }}>
                2,000
            </div>
        </div>
        <div style={{ display: 'flex', paddingBottom: '20px', marginBottom: '20px', borderBottom: '1px solid #cccccc' }}>
            <div style={{ flexGrow: 1, fontWeight: 600 }}>
                Goals
            </div>
            <div style={{ flexGrow: 2, textAlign: 'right' }}>
                More Energy, Lose Weight
            </div>
        </div>
        <div style={{ paddingBottom: '20px', marginBottom: '20px', borderBottom: '1px solid #cccccc' }}>
            <div style={{ fontWeight: 600, marginBottom: '10px' }}>Goals (Other)</div>
            <div style={{ textAlign: 'right' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis, velit sed lacinia sodales, turpis ipsum aliquet orci, at rutrum diam risus ac augue. </div>
        </div>
        <div style={{ display: 'flex', paddingBottom: '20px', marginBottom: '20px', borderBottom: '1px solid #cccccc' }}>
            <div style={{ flexGrow: 1, fontWeight: 600 }}>
                Likes
            </div>
            <div style={{ flexGrow: 2, textAlign: 'right' }}>
                Apples, Bacon, Cherries, Chicken, Tofu
            </div>
        </div>
        <div style={{ display: 'flex', paddingBottom: '20px', marginBottom: '20px', borderBottom: '1px solid #cccccc' }}>
            <div style={{ flexGrow: 1, fontWeight: 600 }}>
                Dislikes
            </div>
            <div style={{ flexGrow: 2, textAlign: 'right' }}>
                Apples, Bacon, Cherries, Chicken, Tofu
            </div>
        </div>
        <div style={{ display: 'flex', paddingBottom: '20px', marginBottom: '20px', borderBottom: '1px solid #cccccc' }}>
            <div style={{ flexGrow: 1, fontWeight: 600 }}>
                Dietary Restrictions
            </div>
            <div style={{ flexGrow: 2, textAlign: 'right' }}>
                Dairy Free, Gluten Free
            </div>
        </div>
        <div style={{ paddingBottom: '20px', marginBottom: '20px', borderBottom: '1px solid #cccccc' }}>
            <div style={{ fontWeight: 600, marginBottom: '10px' }}>Dietary Restrictions (Other)</div>
            <div style={{ textAlign: 'right' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis, velit sed lacinia sodales, turpis ipsum aliquet orci, at rutrum diam risus ac augue. Morbi nec sem ligula. Maecenas vel placerat sem. Integer egestas tortor in sem consequat, in convallis nulla facilisis. Mauris at turpis purus. </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '60px', alignItems: 'center' }}>
            <Link href="./step2" style={{ color: '#aaaaaa' }}>
                Previous
            </Link>
            <Link href="./step4">
                <div style={{ padding: '10px 30px', backgroundColor: '#0F52BA', color: 'white' }}>Next Step &gt;&gt;</div>
            </Link>
        </div>
    </div>
}
