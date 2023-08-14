import Link from 'next/link'
import Image from 'next/image'
import Search from './icons/Search'

export default function QuestionnaireStep1() {
    return <div style={{ maxWidth: '600px', padding: '50px', backgroundColor: 'white' }}>
        <div style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '20px', marginBottom: '20px' }}>
            Select meal plan template
        </div>
        <div style={{ border: '1px solid #cccccc', backgroundColor: 'white', padding: '10px', fontWeight: 200, display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            Search templates
            <Search
                size={"20"}
                color="#cccccc"
            />
        </div>
        <div style={{ border: '1px solid #aaaaaa', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
            <div style={{ fontSize: '20px', fontWeight: 600 }}>12 Week Digestive</div>
            <div style={{ color: '#aaaaaa' }}>Author: Nicole Boyd</div>
            <div style={{ color: '#aaaaaa', marginTop: '10px' }}>Try our triple bean bowel buster burrito. You&apos;ll poop like never before! Warning: may void your toilet&apos;s warranty.</div>
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
