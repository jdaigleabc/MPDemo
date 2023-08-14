import Image from 'next/image'

export default function Home() {
  return (
    <div style={{ padding: '50px' }}>
      <div style={{ fontWeight: 600, fontSize: '20px' }}>
        Overview
      </div>
      <div style={{ fontWeight: 600, fontSize: '20px', marginTop: '20px' }}>
        1. Calculate Base TDEE
      </div>
      <div style={{ fontSize: '20px', paddingLeft: '20px' }}>
        Formula:  (10 x weight (kg)) + (6.25 x height (cm)) - (5 x age (years) + 5)
      </div>
      <div style={{ fontWeight: 600, fontSize: '20px', marginTop: '20px' }}>
        2. Adjust for activity Level
      </div>
      <div style={{ fontSize: '20px', paddingLeft: '20px' }}>
        Formula:  Base TDEE X Acitivty Level
      </div>
      <div style={{ fontSize: '20px', paddingLeft: '20px', marginTop: '20px' }}>
        <div>Sedentary: 1.2</div>
        <div>Lightly active: 1.375</div>
        <div>Moderately active: 1.55</div>
        <div>Very active: 1.725</div>
        <div>Super active: 1.9</div>
      </div>
      <div style={{ fontSize: '20px', paddingLeft: '20px', marginTop: '20px' }}>
        Could have a formula and ask members for hours, but just straight up asking to pick their activity level might be more straight forward for everyone involved.
      </div>
      <div style={{ fontWeight: 600, fontSize: '20px', marginTop: '20px' }}>
        3. Adjust TDEE for weight loss (if required)
      </div>
      <div style={{ fontSize: '20px', paddingLeft: '20px' }}>
        Formula:  TDEE - 500 (max 20%)
      </div>
      <div style={{ fontWeight: 600, fontSize: '20px', marginTop: '20px' }}>
        4. Member sorted into &apos;Portion Group&apos;
      </div>
      <div style={{ fontSize: '20px', paddingLeft: '20px' }}>
        Formula:  200 cal brackets (1500-1700, 1701-1900, 1901-2100, 2101-2300, etc)
      </div>
      <div style={{ fontSize: '20px', paddingLeft: '20px' }}>
        Sidenote:  Bracket used to determine offset for portion calculations (-10%, -20%, -30% from 2,000 maintenance)
      </div>
      <div style={{ fontWeight: 600, fontSize: '20px', marginTop: '20px' }}>
        5. Meal plan template built for 2,000 maintenance
      </div>
      <div style={{ fontSize: '20px', paddingLeft: '20px' }}>
        <div>Template itself doesn&apos;t have a limit or whatever, but individual sections should <u>average</u> out to approximately 2,000 per day.</div>
        <div>Ex:</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>300 - Breakfast</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>100 - Snack</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>1000 - Lunch</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>100 - Snack</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>400 - Supper</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>100 - Snack</div>
        <div style={{ marginTop: '20px' }}>Template also has macro ranges.</div>
        <div>Ex:</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>Breakfast, 10-20 protein, 0-5 fats, 0-10 carb</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>Snack, 10-20 protein, 0-5 fats, 0-10 carb</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>Lunch, 10-20 protein, 0-5 fats, 0-10 carb</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>Snack, 10-20 protein, 0-5 fats, 0-10 carb</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>Supper, 10-20 protein, 0-5 fats, 0-10 carb</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>Snack, 10-20 protein, 0-5 fats, 0-10 carb</div>
      </div>
      <div style={{ fontWeight: 600, fontSize: '20px', marginTop: '20px' }}>
        6. Auto adjust template using portion group offset
      </div>
      <div style={{ fontSize: '20px', paddingLeft: '20px' }}>
        <div>Ex -10% offset:</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>270 - Breakfast</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>90 - Snack</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>900 - Lunch</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>90 - Snack</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>360 - Supper</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>90 - Snack</div>
        <div style={{ marginTop: '20px' }}>Template also has macro ranges.</div>
        <div>Ex -10% offset:</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>Breakfast, 9-18 protein, 0-5 fats, 0-10 carb</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>Snack, 9-18 protein, 0-4.5 fats, 0-9 carb</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>Lunch, 9-18 protein, 0-4.55 fats, 0-9 carb</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>Snack, 9-18 protein, 0-4.55 fats, 0-9 carb</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>Supper, 9-18 protein, 0-4.55 fats, 0-9 carb</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>Snack, 9-18 protein, 0-4.55 fats, 0-9 carb</div>
      </div>
      <div style={{ fontWeight: 600, fontSize: '20px', marginTop: '20px' }}>
        6. Pick recipes that 
      </div>
      <div style={{ fontSize: '20px', paddingLeft: '20px' }}>
        <div>Ex -10% offset:</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>270 - Breakfast</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>90 - Snack</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>900 - Lunch</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>90 - Snack</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>360 - Supper</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>90 - Snack</div>
        <div style={{ marginTop: '20px' }}>Template also has macro ranges.</div>
        <div>Ex -10% offset:</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>Breakfast, 9-18 protein, 0-5 fats, 0-10 carb</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>Snack, 9-18 protein, 0-4.5 fats, 0-9 carb</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>Lunch, 9-18 protein, 0-4.55 fats, 0-9 carb</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>Snack, 9-18 protein, 0-4.55 fats, 0-9 carb</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>Supper, 9-18 protein, 0-4.55 fats, 0-9 carb</div>
        <div style={{ fontSize: '20px', paddingLeft: '20px' }}>Snack, 9-18 protein, 0-4.55 fats, 0-9 carb</div>
      </div>
    </div>
  )
}
