import Link from 'next/link'
import Image from 'next/image'
import Edit from './icons/Edit'

export default function QuestionnaireStep1() {
    return <div style={{ maxWidth: '600px', padding: '50px', backgroundColor: 'white' }}>
        <div style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '20px', marginBottom: '20px' }}>
            Review Member Profile
        </div>
        <div style={{ display: 'flex', textAlign: 'center', gap: '25px', marginBottom: '40px' }}>
            <div style={{ width: '100px' }}>
                <Image src="/profile.jpg" alt='test' height={100} width={100} style={{ borderRadius: '20px', width: '100px', height: 'auto' }} />
            </div>
            <div style={{ display: 'flex', flexGrow: 1, flexDirection: 'column', paddingTop: '10px' }}>
                <div style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '20px' }}>
                    Claudine Sweeney
                </div>
                <div style={{ textAlign: 'left', color: '#aaaaaa' }}>
                    claudine.sweeney@simplyforlife.com
                </div>
            </div>
        </div>
        <div style={{ display: 'flex', paddingBottom: '20px', marginBottom: '20px', borderBottom: '1px solid #cccccc' }}>
            <div style={{ flexGrow: 1, fontWeight: 600 }}>
                Age
            </div>
            <div style={{ flexGrow: 2, textAlign: 'right' }}>
                00 Years old
            </div>
        </div>
        <div style={{ display: 'flex', paddingBottom: '20px', marginBottom: '20px', borderBottom: '1px solid #cccccc' }}>
            <div style={{ flexGrow: 1, fontWeight: 600 }}>
                Height
            </div>
            <div style={{ flexGrow: 2, textAlign: 'right' }}>
                6ft 8in
            </div>
        </div>
        <div style={{ display: 'flex', paddingBottom: '20px', marginBottom: '20px', borderBottom: '1px solid #cccccc' }}>
            <div style={{ flexGrow: 1, fontWeight: 600 }}>
                Sex
            </div>
            <div style={{ flexGrow: 2, textAlign: 'right' }}>
                Female
            </div>
        </div>
        <div style={{ display: 'flex', paddingBottom: '20px', marginBottom: '20px', borderBottom: '1px solid #cccccc' }}>
            <div style={{ flexGrow: 1, fontWeight: 600 }}>
                Activity Level
            </div>
            <div style={{ flexGrow: 2, textAlign: 'right' }}>
                Moderate
            </div>
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
                Current Weight
            </div>
            <div style={{ flexGrow: 2, textAlign: 'right' }}>
                000 Lbs
            </div>
        </div>
        <div style={{ display: 'flex', paddingBottom: '20px', marginBottom: '20px', borderBottom: '1px solid #cccccc' }}>
            <div style={{ flexGrow: 1, fontWeight: 600 }}>
                Goal Weight
            </div>
            <div style={{ flexGrow: 2, textAlign: 'right' }}>
                000 Lbs
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
            <div style={{ textAlign: 'right' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis, velit sed lacinia sodales, turpis ipsum aliquet orci, at rutrum diam risus ac augue. Morbi nec sem ligula. Maecenas vel placerat sem. Integer egestas tortor in sem consequat, in convallis nulla facilisis. Mauris at turpis purus. Aenean sed velit dictum, lobortis ante et, malesuada orci. Nulla rhoncus blandit blandit. In ut eros diam. Pellentesque vitae interdum nisi. Maecenas vehicula libero et nibh porttitor, id ullamcorper mi condimentum. Duis a lacinia mauris, ut vulputate nunc.</div>
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
            <div style={{ textAlign: 'right' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis, velit sed lacinia sodales, turpis ipsum aliquet orci, at rutrum diam risus ac augue. Morbi nec sem ligula. Maecenas vel placerat sem. Integer egestas tortor in sem consequat, in convallis nulla facilisis. Mauris at turpis purus. Aenean sed velit dictum, lobortis ante et, malesuada orci. Nulla rhoncus blandit blandit. In ut eros diam. Pellentesque vitae interdum nisi. Maecenas vehicula libero et nibh porttitor, id ullamcorper mi condimentum. Duis a lacinia mauris, ut vulputate nunc.</div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '60px', alignItems: 'center' }}>
            <Link href="./step1" style={{ color: '#aaaaaa' }}>
                Previous
            </Link>
            <Link href="./step3">
                <div style={{ padding: '10px 30px', backgroundColor: '#0F52BA', color: 'white' }}>Next Step &gt;&gt;</div>
            </Link>
        </div>
    </div>
}
