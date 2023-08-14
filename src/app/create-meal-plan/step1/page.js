import Link from 'next/link'
import Image from 'next/image'
import Search from './icons/Search'
import CircleCheck from './icons/CircleCheck'
import Delete from './icons/Delete'

export default function QuestionnaireStep1() {
    return <div style={{ maxWidth: '600px', padding: '50px', backgroundColor: 'white' }}>
        <div style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '20px', marginBottom: '20px' }}>
            Select your member(s)
        </div>
        <div style={{ border: '1px solid #cccccc', backgroundColor: 'white', padding: '10px', fontWeight: 200, display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            Member Search
            <Search
                size={"20"}
                color="#cccccc"
            />
        </div>
        <div style={{ display: 'flex', textAlign: 'center', gap: '25px' }}>
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
                <div style={{ textAlign: 'left', color: '#aaaaaa' }}>
                    00 Year old female, 6&apos;8, Moderately active.
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Delete size={20} color={"#cccccc"} />
            </div>
        </div>
        <div style={{ borderTop: '1px solid #cccccc', margin: '20px' }}>

        </div>
        <div style={{ display: 'flex', textAlign: 'center', gap: '25px' }}>
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
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Delete size={20} color={"#cccccc"} />
            </div>
        </div>
        <Link href="./step2">
            <div style={{ display: 'flex', justifyContent: 'end', marginTop: '160px' }}>
                <div style={{ borderRadius: '25px', padding: '10px 30px', backgroundColor: '#0F52BA', color: 'white' }}>Next Step &gt;&gt;</div>
            </div>
        </Link>
    </div>
}
