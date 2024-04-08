import React from 'react'

const Episodes = () => {
    const episodes = ["TheSeinfeldChronicles","TheStakeOut","TheRobbery","MaleUnbonding","TheStockTip","TheExGirlfriend","ThePonyRemark","TheJacket","ThePhoneMessage","TheApartment","TheStatue","TheRevenge","TheHeartAttack","TheDeal","TheBabyShower","TheChineseRestaurant","TheBusboy","TheNote","TheTruth","ThePen","TheDog","TheLibrary","TheParkingGarage","TheCafe","TheTape","TheNoseJob","TheStranded","TheAlternateSide","TheRedDot","TheSubway","ThePezDispenser","TheSuicide","TheFixUp","TheBoyfriend","TheLimo","TheGoodSamaritan","TheLetter","TheParkingSpace","TheKeys","TheTrip1","TheTrip2","ThePitch","TheTicket","TheWallet","TheWatch","TheBubbleBoy","TheCheeverLetters","TheOpera","TheVirgin","TheContest","TheAirport","ThePick","TheMovie","TheVisa","TheShoes","TheOuting","TheOldMan","TheImplant","TheJuniorMint","TheSmellyCar","TheHandicapSpot","ThePilotPart1","ThePilotPart2","TheMango","ThePuffyShirt","TheGlasses","TheSniffingAccountant","TheBris","TheLipReader","TheNonFatYogurt","TheBarber","TheMasseuse","TheCigarStoreIndian","TheConversion","TheStall","TheDinnerParty","TheMarineBiologist","ThePie","TheStandIn","TheWife","TheRaincoats1","TheRaincoats2","TheFire","TheHamptons","TheOpposite","TheLipReader","TheBigSalad","ThePledgeDrive","TheChineseWoman","TheCouch","TheGymnast","TheSoup","TheMom&PopStore","TheSecretary","TheRace","TheSwitch","TheLabelMaker","TheScofflaw","TheClipShow1","TheClipShow2","TheBeard","TheKissHello","TheDoorman","TheJimmy","TheDoodle","TheFusilliJerry","TheDiplomatsClub","TheFacePainter","TheUnderstudy","TheEngagement","ThePostponement","TheMaestro","TheWink","TheHotTub","TheSoupNazi","TheSecretCode","ThePoolGuy","TheSponge","TheGum","TheRye","TheCaddy","TheSeven","TheCadillac1","TheCadillac2","TheShowerHead","TheDoll","TheFriarsClub","TheWigMaster","TheCalzone","TheBottleDeposit1","TheBottleDeposit2","TheWaitOut","TheInvitations","TheFoundation","TheSoulMate","TheBizarroJerry","TheLittleKicks","ThePackage","TheFatigues","TheChecks","TheChickenRoaster","TheAbstinence","TheAndreaDoria","TheLittleJerry","TheMoney","TheComeback","TheVanBurenBoys","TheSusie","ThePothole","TheEnglishPatient","TheNap","TheYadaYada","TheMillennium","TheMuffinTops","TheSummerofGeorge","TheButterShave","TheVoice","TheSerenityNow","TheBlood","TheJunkMail","TheMervGriffinShow","TheSlicer","TheBetrayal","TheApology","TheStrike","TheDealership","TheReversePeephole","TheCartoon","TheStrongBox","TheWizard","TheBurning","TheBookstore","TheFrogger","TheMaid","ThePuertoRicanDay","TheClipShow1","TheClipShow2","TheFinale1","TheFinale2"];

    
    return (
        <>
            <h1>Episodes</h1>
            <ul>
                {episodes.map(episode => <li><a href="/users">{episode}</a></li>)}
                <br></br>
            </ul>
        </>
      )
}

export default Episodes