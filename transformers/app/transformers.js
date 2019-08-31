const Transformer = (name, title, type1, type2, type3, sword, wrench, shield, star, allegiance, mode, wave, cardno, rarity) => {
    return { 
          name: name,
          title: title,
          type1: type1, //Leader, Specialist etc.
          type2: type2, //Car, Truck, Plane, Tank, Insecticon, Dinobot, empty etc.
          type3: type3, //Ranged, Melee etc.
          sword: sword, //Attack #
          wrench: wrench, //Health #
          shield: shield, //Defense #
          star: star, //Star cost
          allegiance: allegiance, //Autobot, Decepticon
          mode: mode, //Bot, Alt
          wave: wave, //Wave 1, Wave 1S
          cardno: cardno, //T##
          rarity: rarity, //Common, Uncommon, Rare
    }
  };
    const arceew1 = Transformer('Arcee', 'Skilled Fighter', '1none', '2none', 'Specialist', 1, 9, 1, 5, 'Autobot', 'Alt', '1', 'T01', 'Rare');
    const cosmosw1 = Transformer('Cosmos', 'Recon & Communication', '1none', '2none', 'Specialist', 2, 21, 1, 11, 'Autobot', 'Alt', '1', 'T02', 'Rare');  
    const houndw1 = Transformer('Hound', 'Long Range Scout', '1none', '2none', 'Melee', 4, 12, 2, 8, 'Autobot', 'Alt', '1', 'T03', 'Common');
    const jazzw1 = Transformer('Jazz', 'Special Ops', 'Leader', '2none', 'Melee', 3, 10, 0, 6, 'Autobot', 'Alt', '1', 'T04', 'Uncommon');
    const miragew1 = Transformer('Mirage', 'Lone Wolf', '1none', '2none', 'Ranged', 5, 12, 2, 9, 'Autobot', 'Alt', '1', 'T05', 'Uncommon');      
    const barragew1 = Transformer('Barrage', 'Merciless Insecticon', '1none', 'Insecticon', 'Ranged', 5, 11, 1, 7, 'Insecticon', 'Alt', '1', 'T06', 'Common');
    const bombshellw1 = Transformer('Bombshell', 'Insecticon Mind-Controller', '1none', 'Insecticon', 'Bombshell', 5, 10, 2, 8, 'Insecticon', 'Alt', '1', 'T07', 'Common');    
    const bumblebeecomw1 = Transformer('Bumblebee (C)', 'Courageous Scout', '1none', '2none', 'Specialist', 6, 10, 2, 9, 'Autobot', 'Alt', '1', 'T08', 'Common');  
    const bumblebeeSt = Transformer('Bumblebee (ST)', 'Brave Warrior', 'Leader', '2none', 'Melee', 4, 9, 2, 6, 'Autobot', 'Alt', '1', 'ST01', 'Rare');
    const bumblebeesurarw1 = Transformer('Bumblebee (SR)', 'Legendary Warrior', 'Leader', '2none', 'Melee', 5, 15, 1, 10, 'Autobot', 'Alt', '1', 'T09', 'Super Rare');
    const chopshopw1 = Transformer('Chop Shop', 'Sneaky Insecticon', '1none', 'Insecticon', 'Melee', 4, 9, 1, 6, 'Insecticon', 'Alt', '1', 'T10', 'Uncommon');  
    const chromiaw1 = Transformer('Chromia', 'Special Ops', 'Leader', '2none', 'Specialist', 4, 11, 0, 8, 'Autobot', 'Alt', '1', 'T11', 'Rare');
    const cliffjumperp1 = Transformer('Cliff Jumper', 'Renegade Warrior', '1none', '2none', 'Ranged', 5, 12, 2, 11, 'Autobot', 'Alt', '1', 'P01', 'Super Rare');
    const darkmountw1 = Transformer('Darkmount', 'Cruel Overlord', '1none', '2none', 'Melee', 5, 9, 3, 9, 'Decepticon', 'Alt', '1', 'T12', 'Rare');
    const deadlockw1 = Transformer('Deadlock', 'Bounty Hunter', '1none', '2none', 'Ranged', 5, 11, 1, 8, 'Decepticon', 'Alt', '1', 'T13', 'Uncommon');        
    const shockwavew1 = Transformer('Shockwave', 'Cybertron Commander', 'Leader', '2none', 'Specialist', 4, 11, 3, 11, 'Decepticon', 'Alt', '1', 'T14', 'Rare');
    const demolisherw1 = Transformer('Demolisher', 'Devoted Decepticon', '1none', '2none', 'Melee', 0, 7, 4, 6, 'Decepticon', 'Alt', '1', 'T15', 'Uncommon');    	
    const sludgew1 = Transformer('Sludge', 'Mighty Stomper', '1none', 'Dinobot', 'Specialist', 5, 12, 2, 8, 'Dinobot', 'Alt', '1', 'T16', 'Uncommon');  
    const slugw1 = Transformer('Slug', 'Hot-Headed Warrior', '1none', 'Dinobot', 'Melee', 6, 13, 0, 9, 'Dinobot', 'Alt', '1', 'T17', 'Common');
    const snarlw1 = Transformer('Snarl', 'Desert Warrior', '1none', 'Dinobot', 'Melee', 5, 9, 2, 7, 'Dinobot', 'Alt', '1', 'T18', 'Uncommon');    
    const swoopw1 = Transformer('Swoop', 'Fearsome Flyer', '1none', 'Dinobot', 'Specialist', 5, 10, 0, 6, 'Dinobot', 'Alt', '1', 'T19', 'Common');
    const flamewarw1 = Transformer('Flamewar', 'Veteran Decepticon', '1none', '2none', 'Specialist', 3, 10, 1, 5, 'Decepticon', 'Alt', '1', 'T20', 'Common');
    const grimlockw1 = Transformer('Grimlock', 'Dinobot Leader', 'Leader', 'Dinobot', 'Melee', 6, 12, 2, 10, 'Dinobot', 'Alt', '1', 'T21', 'Uncommon');
    const infernow1 = Transformer('Inferno', 'Fearless Firefighter', '1none', '2none', 'Ranged', 8, 11, 3, 12, 'Autobot', 'Alt', '1', 'T22', 'Common');
    const skrapnelw1 = Transformer('Skrapnel', 'Insecticon Leader', 'Leader', 'Insecticon', 'Melee', 5, 7, 0, 7, 'Insecticon', 'Alt', '1', 'T23', 'Rare');
    const ironhideSt = Transformer('Ironhide', 'Veteran Autobot', '1none', '2none', 'ranged', 4, 7, 2, 6, 'Autobot', 'Alt', '1', 'ST02', 'Rare');
    const jetfirew1 = Transformer('Jetfire', 'Air Guardian', '1none', '2none', 'Ranged', 4, 15, 1, 10, 'Autobot', 'Alt', '1', 'T24', 'Uncommon');
    const kickbackw1 = Transformer('Kickback', 'Cunning Insecticon', '1none', 'Insecticon', 'Melee', 0, 9, 1, 5, 'Insecticon', 'Alt', '1', 'T25', 'Uncommon');
    const megatroncomw1 = Transformer('Megatron (C)', 'Decepticon Leader', 'Leader', '2none', 'Ranged', 4, 12, 2, 10, 'Decepticon', 'Alt', '1', 'T26', 'Common');
    const megatronrarw1 = Transformer('Megatron (R)', 'Living Weapon', 'Leader', '2none', 'Ranged', 7, 14, 2, 13, 'Decepticon', 'Alt', '1', 'T27', 'Rare');
    const metroplexw1a = Transformer('Metroplex', 'Autobot City', 'Titan', '2none', 'Ranged', 6, 35, 2, 25, 'Autobot', 'Alt', '1', '1AT01', 'Super Rare');
    const nemesisprimew1 = Transformer('Nemesis Prime', 'Dark Clone', '1none', '2none', 'Melee', 7, 16, 2, 12, 'Decepticon', 'Alt', '1', 'T28', 'Super Rare');
    const optimusprimerarw1 = Transformer('Optimus Prime (R)', 'Battlefield Legend', 'Leader', '2none', 'Ranged', 8, 14, 2, 13, 'Autobot', 'Alt', '1', 'T29', 'Rare');
    const optimusprimecomw1 = Transformer('Optimus Prime (C)', 'Freedom Fighter', 'Leader', '2none', 'Melee', 5, 15, 2, 12, 'Autobot', 'Alt', '1', 'T30', 'Rare');
    const optimusprimeSt = Transformer('Optimus Prime (ST)', 'Autobot Leader', 'Leader', '2none', 'Ranged', 3, 10, 2, 7, 'Autobot', 'Alt', '1S', 'ST03', 'Rare');
    const prowlw1 = Transformer('Prowl', 'Military Strategist', '1none', '2none', 'Ranged', 4, 9, 2, 6, 'Autobot', 'Alt', '1', 'T31', 'Uncommon');
    const ramjetw1 = Transformer('Ramjet', 'Sky Smasher', '1none', '2none', 'Ranged', 4, 14, 2, 10, 'Decepticon', 'Alt', '1', 'T32', 'Common');
    const ransackw1 = Transformer('Ransack', 'Insecticon Commando', '1none', 'Insecticon', 'Ranged', 0, 8, 3, 7, 'Insecticon', 'Alt', '1', 'T33', 'Uncommon');
    const redalertSt = Transformer('Red Alert', 'Security Chief', '1none', '2none', 'Ranged', 3, 10, 2, 6, 'Autobot', 'Alt', '1S', 'ST04', 'Rare');
    const sergeantkupw1 = Transformer('Sergeant Kup', 'Veteran Sergeant', '1none', '2none', 'Ranged', 5, 8, 1, 7, 'Autobot', 'Alt', '1', 'T34', 'Common');
    const skywarpw1 = Transformer('Skywarp', 'Sneaky Prankster', '1none', '2none', 'Ranged', 4, 8, 2, 6, 'Decepticon', 'Alt', '1S', 'T35', 'Uncommon');
    const scamperw1a = Transformer('Scamper', 'City Patrol', '1none', '2none', 'Ranged', 3, 4, 1, 4, 'Autobot', 'Alt', '1', '1AT02', 'Rare');
    const sixgunw1a = Transformer('Six-Gun', 'Heavy Weapons Expert', '1none', '2none', 'Ranged', 4, 5, 0, 4, 'Autobot', 'Alt', '1', '1AT03', 'Rare');    
    const slammerw1a = Transformer('Slammer', 'Combat Drone', '1none', 'Tank', 'Ranged', 3, 3, 3, 4, 'Autobot', 'Alt', '1', '1AT04', 'Rare');
    const slipstreamp1 = Transformer('Slipstream', 'Strategic Seeker', '1none', '2none', 'Ranged', 3, 13, 1, 8, 'Decepticon', 'Alt', '1', 'P02', 'Super Rare');
    const starscreamcomw1 = Transformer('Starscream (C)', 'Scheming Second-In-Command', 'Leader', '2none', 'Ranged', 5, 14, 1, 10, 'Decepticon', 'Alt', '1', 'T36', 'Common');
    const starscreamuncw1 = Transformer('Starscream (U)', 'Air Commander', 'Leader', '2none', 'Ranged', 4, 13, 2, 11, 'Decepticon', 'Alt', '1', 'T37', 'Uncommon');
    const sunstormw1 = Transformer('Sunstorm', 'Fusion Flyer', '1none', '2none', 'Ranged', 0, 14, 1, 11, 'Decepticon', 'Alt', '1', 'T38', 'Rare');
    const thundercrackerw1 = Transformer('Thundercracker', 'Mach Warrior', '1none', '2none', 'Ranged', 5, 12, 1, 8, 'Decepticon', 'Alt', '1', 'T39', 'Uncommon');
    const wheeljackw1 = Transformer('Wheeljack', 'Weapons Inventor', '1none', '2none', 'Melee', 5, 13, 1, 9, 'Autobot', 'Alt', '1', 'T40', 'Uncommon');

    //Wave 2 Transformers
    const acidstormw2 = Transformer('Acid Storm', 'Toxic Terror', '1none', 'Plane', 'Ranged', 3, 10, 0, 6, 'Decepticon', 'Alt', '2', 'T01', 'Rare' );
    const airraidw2 = Transformer('Air Raid', 'Fearless Flyer', 'Aerialbot', 'Plane', 'Ranged', 3, 8, 0, 5, 'Autobot', 'Alt', '2', 'T02', 'Common' );
    const alphabravow2 = Transformer('Alpha Bravo', 'Airborne Special Ops', 'Aerialbot', 'Plane', 'Ranged', 2, 8, 1, 5, 'Autobot', 'Alt', '2', 'T03', 'Common' );
    const hotrodw2 = Transformer('Hot Rod', 'Impulsive Fighter', 'Sentinel', 'Car', 'Ranged', 4, 10, 2, 6, 'Autobot', 'Alt', '2', 'T04', 'Uncommon' );
    const miragew2 = Transformer('Autobot Mirage', 'Counterintelligence', 'Sentinel', 'Car', 'Specialist', 2, 10, 2, 7, 'Autobot', 'Alt', '2', 'T05', 'Uncommon' );
    const novastarw2 = Transformer('Novastar', 'Search And Rescue', 'Car', 'Truck', 'Melee', 6, 13, 3, 12, 'Autobot', 'Alt', '2', 'T06', 'Common' );
    const springerw2 = Transformer('Springer', 'Aerial Defense', '1none', 'Truck', 'Ranged', 4, 14, 2, 12, 'Autobot', 'Alt', '2', 'T07', 'Super Rare' );
    const blackwingw2 = Transformer('Blackwing', 'Aerial Attacker', 'Dreadwing', 'Plane', 'Ranged', 5, 12, 1, 8, 'Decepticon', 'Alt', '2', 'T08', 'Common' );
    const blitzwingw2 = Transformer('Blitzwing', 'Relentless Foe', '1none', 'Tank', 'Ranged', 3, 13, 2, 11, 'Decepticon', 'Alt', '2', 'T14', 'Super Rare' );
    const bluestreakw2 = Transformer('Bluestreak', 'Reluctant Soldier', '1none', 'Car', 'Melee', 0, 9, 4, 8, 'Autobot', 'Alt', '2', 'T10', 'Uncommon' );
    const blurrw2 = Transformer('Blurr', 'Fastest Bot In The Galaxy', '1none', 'Car', 'Melee', 3, 10, 2, 12, 'Autobot', 'Alt', '2', 'T11', 'Uncommon' );
    const bombshellw2 = Transformer('Bombshell', 'Decepticon Psy Ops', '1none', 'Insecticon', 'Specialist', 1, 15, 1, 11, 'Decepticon', 'Alt', '2', 'T12', 'Rare' );
    const breakdownw2 = Transformer('Breakdown', 'Paranoid Scout', 'Stunticon', 'Car', 'Specialist', 2, 7, 2, 5, 'Decepticon', 'Alt', '2', 'T13', 'Common' );
    const bumblebeew2 = Transformer('Bumblebee (C)', 'Trusted Lieutenant', 'Leader', 'Car', 'Melee', 5, 14, 1, 10, 'Autobot', 'Alt', '2', 'T14', 'Common' );
    const bumblebeestw2 = Transformer('Bumblebee (ST)', 'Least Likely, Most Dangerous', '1none', 'Car', 'Melee', 3, 9, 2, 7, 'Autobot', 'Alt', '2', 'ST01', 'Rare' );
    const deadendw2 = Transformer('Dead End', 'Doomed Loner', 'Stunticon', 'Car', 'Ranged', 2, 7, 2, 5, 'Decepticon', 'Alt', '2', 'T15', 'Common' );
    const dragstripw2 = Transformer('Drag Strip', 'Cuttthroat Warrior', 'Stunticon', 'Car', 'Melee', 3, 7, 2, 5, 'Decepticon', 'Alt', '2', 'T16', 'Common' );
    const veninw2 = Transformer('Venin', 'Insecticon Tyrant', 'Leader', 'Insecticon', 'Ranged', 4, 12, 2, 9, 'Decepticon', 'Alt', '2', 'T17', 'Rare' );
    const sludgew2 = Transformer('Sludge', 'Dino Demolitions', 'Dinobot', '2none', 'Melee', 3, 12, 2, 8, 'Autobot', 'Alt', '2', 'T18', 'Rare' );
    const slugw2 = Transformer('Slug', 'Battering Ram', 'Dinobot', '2none', 'Melee', 3, 10, 3, 8, 'Autobot', 'Alt', '2', 'T19', 'Rare' );
    const snarlw2 = Transformer('Snarl', 'Spiked Battler', 'Dinobot', '2none', 'Melee', 3, 9, 2, 7, 'Autobot', 'Alt', '2', 'T20', 'Rare' );
    const swoopw2 = Transformer('Swoop', 'Bombardier', 'Dinobot', '2none', 'Specialist', 3, 11, 1, 7, 'Autobot', 'Alt', '2', 'T21', 'Rare' );
    const dirgew2 = Transformer('Dirge', 'Doombringer', '1none', 'Plane', 'Ranged', 4, 11, 2, 8, 'Decepticon', 'Alt', '2', 'T22', 'Uncommon' );
    const divebombw2 = Transformer('Divebomb', 'Aerial Assault', 'Predacon', '2none', 'Specialist', 2, 7, 2, 5, 'Decepticon', 'Alt', '2', 'T23', 'Uncommon' );
    const dreadwindw2 = Transformer('Dreadwind', 'Air Defense', 'Dreadwing', 'Plane', 'Ranged', 2, 12, 3, 8, 'Decepticon', 'Alt', '2', 'T24', 'Common' );
    const fireflightw2 = Transformer('Fire Flight', 'Sky High Recon', 'Aerialbot', 'Plane', 'Ranged', 1, 7, 2, 5, 'Autobot', 'Alt', '2', 'T25', 'Common' );
    const grapplew2 = Transformer('Grapple', 'Autobot Architect', '1none', 'Truck', 'Melee', 5, 12, 2, 12, 'Autobot', 'Alt', '2', 'T26', 'Uncommon' );
    const grimlockw2 = Transformer('Grimlock', 'Powerful Commander', 'Dinobot', 'Leader', 'Melee', 4, 13, 0, 9, 'Autobot', 'Alt', '2', 'T27', 'Rare' );
    const ironhidew2 = Transformer('Ironhide', 'Steadfast Brawler', 'Sentinel', 'Truck', 'Melee', 4, 10, 2, 7, 'Autobot', 'Alt', '2', 'T28', 'Uncommon' );
    const megatronw2 = Transformer('Megatron (C)', 'Arrogant Ruler', 'Leader', 'Tank', 'Ranged', 3, 14, 3, 10, 'Decepticon', 'Alt', '2', 'T29', 'Common' );
    const megatronstw2 = Transformer('Megatron (ST)', 'Cybertronian Tyrant', '1none', 'Tank', 'Ranged', 2, 10, 2, 7, 'Decepticon', 'Alt', '2', 'T02', 'Rare' );
    const motormasterw2 = Transformer('Motormaster', 'Stunticon Leader', 'Leader', 'Stunticon', 'Truck', 2, 8, 2, 5, 'Decepticon', 'Alt', '2', 'T30', 'Common' );
    const offroadw2 = Transformer('Offroad', 'All-Terrain Soldier', 'Stunticon', 'Truck', 'Melee', 2, 6, 3, 5, 'Decepticon', 'Alt', '2', 'T31', 'Common' );
    const optimusprimew2 = Transformer('Optimus Prime', 'Gleaming Commander', 'Sentinel', 'Leader', 'Melee', 4, 15, 2, 11, 'Autobot', 'Alt', '2', 'T32', 'Uncommon' );
    const headstrongw2 = Transformer('Headstrong', 'Ground Assault', 'Predacon', '2none', 'Melee', 1, 5, 3, 5, 'Decepticon', 'Alt', '2', 'T33', 'Uncommon' );
    const rampagew2 = Transformer('Rampage', 'Savage Hunter', 'Predacon', '2none', 'Melee', 2, 7, 1, 5, 'Decepticon', 'Alt', '2', 'T34', 'Uncommon' );
    const prowlw2 = Transformer('Prowl', 'Strategic Mastermind', 'Sentinel', 'Car', 'Melee', 5, 10, 1, 7, 'Autobot', 'Alt', '2', 'T35', 'Uncommon' );
    const razorclaww2 = Transformer('Razorclaw', 'Predacon Leader', 'Predacon', 'Leader', 'Melee', 2, 8, 1, 5, 'Decepticon', 'Alt', '2', 'T36', 'Uncommon' );
    const ruckusw2 = Transformer('Ruckus', 'Combat Assault', '1none', 'Car', 'Ranged', 5, 12, 3, 11, 'Decepticon', 'Alt', '2', 'T37', 'Common' );
    const silverboltw2 = Transformer('Silverbolt', 'Aerialbot Leader', 'Aerialbot', 'Plane', 'Ranged', 2, 7, 1, 5, 'Autobot', 'Alt', '2', 'T38', 'Common' );
    const skydivew2 = Transformer('Skydive', 'Air Warfare Specialist', 'Aerialbot', 'Plane', 'Specialist', 3, 8, 2, 5, 'Autobot', 'Alt', '2', 'T39', 'Common' );
    const skywarpw2 = Transformer('Skywarp', 'Teleporting Seeker', '1none', 'Plane', 'Specialist', 4, 13, 1, 10, 'Decepticon', 'Alt', '2', 'T40', 'Rare' );
    const starscreamw2 = Transformer('Starscream (SR)', 'Decepticon King', 'Leader', 'Plane', 'Ranged', 5, 15, 2, 13, 'Decepticon', 'Alt', '2', 'T41', 'Super Rare' );
    const starscreamstw2 = Transformer('Starscream (ST)', 'Decepticon Lieutenant', '1none', 'Plane', 'Melee', 3, 7, 1, 5, 'Decepticon', 'Alt', '2', 'T03', 'Rare' );
    const sunstreakerw2 = Transformer('Sunstreaker', 'Bold Warrior', 'Sentinel', 'Car', 'Specialist', 4, 10, 1, 7, 'Autobot', 'Alt', '2', 'T42', 'Uncommon' );
    const thrustw2 = Transformer('Thrust', 'Supersonic Interceptor', '1none', 'Plane', 'Ranged', 3, 11, 3, 9, 'Decepticon', 'Alt', '2', 'T43', 'Uncommon' );
    const toroxw2 = Transformer('Torox', 'Fueler', 'Predacon', '2none', 'Melee', 2, 9, 0, 5, 'Decepticon', 'Alt', '2', 'T44', 'Uncommon' );
    const warpathw2 = Transformer('Warpath', 'Confident Sharpshooter', '1none', 'Tank', 'Ranged', 4, 6, 2, 6, 'Autobot', 'Alt', '2', 'T45', 'Rare' );
    const windbladew2 = Transformer('Windblade (SR)', 'Combiner Hunter', '1none', 'Plane', 'Specialist', 5, 14, 2, 12, 'Autobot', 'Alt', '2', 'T46', 'Super Rare' );
    const scavengerw2 = Transformer('Scavenger', 'Mining And Salvage', 'Constructicon', '2none', 'Melee', 3, 5, 1, 4, 'Decepticon', 'Alt', '2', 'T05', 'Rare' );
    const scrapperw2 = Transformer('Scrapper', 'Construction Foreman', 'Constructicon', '2none', 'Melee', 3, 7, 1, 5, 'Decepticon', 'Alt', '2', 'T06', 'Rare' );
    const mixmasterw2 = Transformer('Mixmaster', 'Materials Fabrication', 'Constructicon', '2none', 'Melee', 3, 4, 2, 4, 'Decepticon', 'Alt', '2', 'T04', 'Rare' );
    const longhaulw2 = Transformer('Longhaul', 'Transport', 'Constructicon', '2none', 'Melee', 2, 6, 1, 4, 'Decepticon', 'Alt', '2', 'T03', 'Rare' );
    const hookw2 = Transformer('Hook', 'Surgical Engineer', 'Constructicon', '2none', 'Ranged', 2, 7, 0, 4, 'Decepticon', 'Alt', '2', 'T02', 'Rare' );
    const bonecrusherw2 = Transformer('Bonecrusher', 'Demolitions', 'Constructicon', '2none', 'Melee', 3, 4, 1, 4, 'Decepticon', 'Alt', '2', 'T01', 'Rare' );
    const omegasupremew2 = Transformer('Omega Supreme', 'Autobot Defense Base', 'Guardian', 'Spaceship', 'Tank', 4, 24, 2, 19, 'Autobot', 'Alt', '2', 'P2', 'Rare' );
    const windbladestw2 = Transformer('Windblade (ST)', 'Defender of Truth', '1none', 'Plane', 'Ranged', 2, 8, 1, 5, 'Autobot', 'Alt', '2', 'T04', 'Rare' );
    const superionw2 = Transformer('Superion', 'Sky Protector', '1none', 'Aerialbot', 'Ranged', 6, 39, 1, 25, 'Autobot', 'null', '2', 'null', 'null' );
    const predakingw2 = Transformer('Predaking', 'Ferocius Hunter', '1none', 'Predacon', 'Melee', 7, 37, 2, 25, 'Decepticon', 'null', '2', 'null', 'null' );
    const optimusmaximusw2 = Transformer('Optimus Maximus', 'Ultimate Defender', 'Leader', 'Sentinel', 'Ranged', 9, 65, 1, 25, 'Autobot', 'null', '2', 'null', 'null' );
    const menasorw2 = Transformer('Menasor', 'Menacing Colossus', '1none', 'Stunticon', 'Melee', 6, 35, 2, 25, 'Decepticon', 'null', '2', 'null', 'null' );
    const volcanicusw2 = Transformer('Volcanicus', 'Fiery Champion', '1none', 'Dinobot', 'Melee', 6, 56, 0, 25, 'Autobot', 'null', '2', 'null', 'null' );
    const devastatorw2 = Transformer('Devastator', 'Towering Warrior', '1none', 'Constructicon', 'Melee', 6, 33, 2, 25, 'Decepticon', 'null', '2', 'null', 'null' );
    const dreadwingw2 = Transformer('Dreadwing', 'Sky Destroyer', 'Dreadwing', 'Plane', 'Ranged', 7, 24, 2, 15, 'Autobot', 'null', '2', 'null', 'null' );

    //Wave 3 Transformers
    const alphatrionw3 = Transformer('Alpha Trion', 'Cybertronian Sage', '1none', 'Spaceship', 'Ranged', 5, 14, 2, 11, 'Autobot', 'Alt', '3', 'T01', 'Rare' );
    const elita1w3 = Transformer('C. Elita-1', 'Special Ops - Ranger', 'Leader', 'Car', 'Specialist', 5, 17, 0, 12, 'Autobot', 'Alt', '3', 'T02', 'Rare' );
    const ironhidew3 = Transformer('C. Ironhide', 'Infantry Body Guard', '1none', 'Truck', 'Ranged', 4, 12, 2, 9, 'Autobot', 'Alt', '3', 'T03', 'Rare' );
    const starscreamw3 = Transformer('C. Starscream', 'Infantry - Air Commander', '1none', 'Plane', 'Ranged', 4, 16, 2, 12, 'Decepticon', 'Alt', '3', 'T04', 'Rare' );
    const wheeljackw3 = Transformer('C. Wheeljack', 'Engineering - Scientist', '1none', 'Car', 'Specialist', 5, 12, 1, 9, 'Autobot', 'Alt', '3', 'T05', 'Uncommon' );
    const megatronw3 = Transformer('G. Megatron', 'Search And Rescue', 'Car', 'Truck', 'Melee', 5, 15, 3, 13, 'Decepticon', 'Alt', '3', 'T06', 'Super Rare' );
    const optimusprimew3 = Transformer('G. Optimus Prime', 'Infantry Leader', 'Leader', 'Truck', 'Melee', 4, 14, 3, 11, 'Autobot', 'Alt', '3', 'T07', 'Rare' );
    const prowlw3 = Transformer('M. Prowl', 'Infantry - Strategist', '1none', 'Car', 'Ranged', 4, 14, 2, 10, 'Autobot', 'Alt', '3', 'T08', 'Common' );
    const shockwavew3 = Transformer('M. Shockwave', 'Applied Sciences - Scientist', 'Leader', 'Spaceship', 'Specialist', 6, 17, 3, 14, 'Decepticon', 'Alt', '3', 'T09', 'Super Rare' );
    const soundwavew3 = Transformer('M. Soundwave', 'Espionage Spy', 'Leader', 'Spaceship', 'Specialist', 4, 15, 2, 11, 'Decepticon', 'Alt', '3', 'T10', 'Uncommon' );
    const ultramagnusw3 = Transformer('M. Ultra Magnus', 'Infantry - City Commander', 'Leader', 'Truck', 'Ranged', 5, 17, 1, 12, 'Autobot', 'Alt', '3', 'T11', 'Super Rare' );
    const arceew3 = Transformer('P. Arcee', 'Special Ops - Warrior', '1none', 'Car', 'Melee', 4, 12, 1, 8, 'Autobot', 'Alt', '3', 'T12', 'Common' );
    const firedrivew3 = Transformer('P. Firedrive', 'Ground Command - Artillery', '1none', 'Battlemaster', 'Ranged', 3, 10, 0, 7, 'Autobot', 'Alt', '3', 'T13', 'Uncommon' );
    const flakw3 = Transformer('P. Flak', 'Artillery - Tactics', 'Battle Patrol', 'Tank', 'Ranged', 2, 7, 2, 5, 'Autobot', 'Alt', '3', 'T14', 'Common' );
    const lionizerw3 = Transformer('P. Lionizer', 'Ground Command - Artillery', '1none', 'Battlemaster', 'Melee', 0, 8, 2, 7, 'Autobot', 'Alt', '3', 'T15', 'Uncommon' );
    const mudslingerw3 = Transformer('P. Mudslinger', 'Special Ops - Infiltration', 'Offroad Patrol', 'Truck', 'Melee', 3, 7, 1, 5, 'Autobot', 'Alt', '3', 'T16', 'Common' );
    const pteraxadonw3 = Transformer('P. Pteraxadon', 'Air Command - Artillery', '1none', 'Battlemaster', 'Melee', 3, 9, 0, 6, 'Autobot', 'Alt', '3', 'T17', 'Uncommon' );
    const redalertw3 = Transformer('P. Red Alert', 'Medical - Medic', '1none', 'Car', 'Melee', 3, 11, 2, 7, 'Decepticon', 'Alt', '3', 'T18', 'Common' );
    const redheatw3 = Transformer('P. Red Heat', 'Infantry - Emergency Response', 'Rescue Patrol', 'Truck', 'Specialist', 2, 8, 0, 5, 'Autobot', 'Alt', '3', 'T19', 'Common' );
    const sideswipew3 = Transformer('P. Sideswipe', 'Infantry - Soldier', '1none', 'Car', 'Melee', 2, 11, 1, 8, 'Autobot', 'Alt', '3', 'T20', 'Uncommon' );
    const stakeoutw3 = Transformer('P. Stakeout', 'Infantry - Communications', 'Rescue Patrol', 'Car', 'Specialist', 3, 5, 0, 4, 'Autobot', 'Alt', '3', 'T21', 'Common' );
    const topshotw3 = Transformer('P. Top Shot', 'Artillery - Patrol Leader', 'Leader', 'Battle Patrol', 'Tank', 1, 5, 2, 4, 'Autobot', 'Alt', '3', 'T22', 'Common' );
    const totew3 = Transformer('P. Tote', 'Special Ops - Infiltration', 'Offroad Patrol', 'Truck', 'Melee', 2, 5, 1, 4, 'Autobot', 'Alt', '3', 'T23', 'Common' );
    const trailbreakerw3 = Transformer('P. Trailbreaker', 'Infantry - Fortification & Defense', '1none', 'Truck', 'Melee', 4, 14, 2, 10, 'Autobot', 'Alt', '3', 'T24', 'Uncommon' );
    const aimlessw3 = Transformer('R. Aimless', 'Airforce - Weapons', '1none', 'Battlemaster', 'Ranged', 3, 8, 0, 7, 'Decepticon', 'Alt', '3', 'T25', 'Uncommon' );
    const blowpipew3 = Transformer('R. Blowpipe', 'Airforce - Weapons', '1none', 'Battlemaster', 'Ranged', 2, 7, 1, 5, 'Decepticon', 'Alt', '3', 'T26', 'Common' );
    const cindersaurw3 = Transformer('R. Cindersaur', 'Black Ops - Demolitions', '1none', 'Firecon', 'Melee', 4, 12, 1, 8, 'Decepticon', 'Alt', '3', 'T27', 'Rare' );
    const detourw3 = Transformer('R. Detour', 'Infantry - Demolitions', 'Sportscar Patrol', 'Car', 'Specialist', 3, 6, 0, 4, 'Decepticon', 'Alt', '3', 'T28', 'Common' );
    const flamefeatherw3 = Transformer('R. Flamefeather', 'Black Ops - Soldier', '1none', 'Firecon', 'Ranged', 3, 11, 1, 8, 'Decepticon', 'Alt', '3', 'T29', 'Uncommon' );
    const ionstormw3 = Transformer('R. Ion Storm', 'Infantry - Rainmaker', '1none', 'Plane', 'Ranged', 7, 14, 3, 12, 'Decepticon', 'Alt', '3', 'T30', 'Common' );
    const laserbeakw3 = Transformer('R. Laserbeak', 'Espionage - Interrogation', '1none', '2none', 'Spy Patrol', 0, 9, 2, 5, 'Decepticon', 'Alt', '3', 'T31', 'Common' );
    const needlenosew3 = Transformer('R. Needlenose', 'Airforce - Soldier', '1none', 'Plane', 'Ranged', 3, 11, 1, 8, 'Decepticon', 'Alt', '3', 'T32', 'Rare' );
    const nightstickw3 = Transformer('R. Nightstick', 'Groundforce - Weapons', '1none', 'Battlemaster', 'Specialist', 2, 6, 1, 6, 'Decepticon', 'Alt', '3', 'T33', 'Uncommon' );
    const ravagew3 = Transformer('R. Ravage', 'Espionage - Saboteur', '1none', '2none', 'Spy Patrol', 0, 7, 3, 5, 'Decepticon', 'Alt', '3', 'T34', 'Common' );
    const roadhuggerw3 = Transformer('R. Road Hugger', 'Infantry - Tactics', 'Sportscar Patrol', 'Car', 'Melee', 3, 7, 1, 5, 'Decepticon', 'Alt', '3', 'T35', 'Common' );
    const runaboutw3 = Transformer('R. Runabout', 'Infantry - Soldier', '1none', 'Car', 'Ranged', 5, 13, 2, 10, 'Decepticon', 'Alt', '3', 'T36', 'Common' );
    const runamuckw3 = Transformer('R. Runamuck', 'Infantry - Soldier', '1none', 'Car', 'Specialist', 4, 13, 2, 10, 'Decepticon', 'Alt', '3', 'T37', 'Common' );
    const stormcloudw3 = Transformer('R. Storm Cloud', 'Infantry - Electronic Warfare', 'Airstrike Patrol', 'Plane', 'Ranged', 3, 6, 0, 4, 'Decepticon', 'Alt', '3', 'T38', 'Common' );
    const triggerhappyw3 = Transformer('R. Trigger Happy', 'Air Force - Gunner', '1none', 'Plane', 'Ranged', 3, 12, 2, 8, 'Decepticon', 'Alt', '2', 'T39', 'Uncommon' );
    const visperw3 = Transformer('R. Visper', 'Infantry - Patrol Leader', 'Leader', 'Airstrike Patrol', 'Plane', 3, 7, 0, 5, 'Decepticon', 'Alt', '3', 'T40', 'Common' );
    const chromiaw3 = Transformer('S. Chromia', 'Special Ops - Counterintelligence', '1none', 'Car', 'Specialist', 4, 12, 1, 7, 'Autobot', 'Alt', '3', 'T41', 'Common' );
    const cogw3 = Transformer('S. Cog', 'Artillery - Mechanic', '1none', 'Weaponizer', 'Ranged', 4, 12, 1, 10, 'Autobot', 'Alt', '3', 'T42', 'Super Rare' );
    const skrapnelw3 = Transformer('S. Skrapnel', 'Infantry - Electronic Warfare', 'Leader', 'Insecticon', 'Melee', 4, 11, 2, 9, 'Decepticon', 'Alt', '3', 'T44', 'Common' );
    const skywarpw3 = Transformer('S. Skywarp', 'Black Ops - Seeker', '1none', 'Plane', 'Specialist', 4, 11, 2, 8, 'Decepticon', 'Alt', '3', 'T45', 'Rare' );
    const sparkstalkerw3 = Transformer('S. Sparkstalker', 'Black Ops - Cryptology', '1none', 'Firecon', 'Melee', 4, 10, 2, 8, 'Decepticon', 'Alt', '3', 'T46', 'Common' );
    const flamewarw3 = Transformer('S. Flamewar', 'Special Ops - Hunter', '1none', 'Motorcycle', 'Specialist', 4, 10, 0, 7, 'Decepticon', 'Alt', '3', 'T47', 'Uncommon' );
    const ratchetw3 = Transformer('S. Ratchet', 'Engineering - Rescue & Repair', '1none', 'Truck', 'Specialist', 4, 14, 0, 8, 'Autobot', 'Alt', '3', 'T48', 'Uncommon' );
    const smashdownw3 = Transformer('P. Smashdown', 'Ground Command - artillery', '1none', 'Battlemaster', 'Melee', 2, 6, 2, 5, 'Autobot', 'Alt', '3', 'P03', 'Rare' );
    const overdrivew3 = Transformer('S. Overdrive', 'Special Ops - Strategist', 'Leader', 'Omnibot', 'Car', 3, 12, 1, 9, 'Autobot', 'Alt', '3', 'T03', 'Rare' );
    const downshiftw3 = Transformer('P. Downshift', 'Special Ops - Security Agent', '1none', 'Omnibot', 'Ranged', 4, 11, 1, 8, 'Autobot', 'Alt', '3', 'T02', 'Rare' );
    const camshaftw3 = Transformer('P. Camshaft', 'Special Ops - Scout', 'Omnibot', 'Car', 'Specialist', 3, 11, 1, 8, 'Autobot', 'Alt', '3', 'T01', 'Rare' );
    const soundwaveSRw3 = Transformer('Soundwave', 'Communications', '1none', 'Leader', 'Specialist', 4, 15, 2, 10, 'Decepticon', 'Alt', 'Blaster vs Soundwave', 'T05', 'Super Rare' );
    const buzzsaww3 = Transformer('Buzzsaw', 'Spy', '1none', '2none', 'Mini-Cassette', 0, 9, 1, 5, 'Decepticon', 'Alt', 'Blaster vs Soundwave', 'T06', 'Rare' );
    const frenzyw3 = Transformer('Frenzy', 'Warrior', '1none', '2none', 'Mini-Cassette', 0, 9, 1, 5, 'Decepticon', 'Alt', 'Blaster vs Soundwave', 'T07', 'Rare' );
    const ravageRw3 = Transformer('Ravage', 'Saboteur', '1none', '2none', 'Mini-Cassette', 0, 9, 1, 5, 'Decepticon', 'Alt', 'Blaster vs Soundwave', 'T08', 'Rare' );
    const ramhornw3 = Transformer('Ramhorn', 'Warrior', '1none', '2none', 'Mini-Cassette', 0, 9, 1, 5, 'Autobot', 'Alt', 'Blaster vs Soundwave', 'T03', 'Rare' );
    const steeljaww3 = Transformer('Steeljaw', 'Tracker', '1none', '2none', 'Mini-Cassette', 0, 9, 1, 5, 'Autobot', 'Alt', 'Blaster vs Soundwave', 'T04', 'Rare' );
    const ejectw3 = Transformer('Eject', 'Electronic Surveillance', '1none', '2none', 'Mini-Cassette', 0, 9, 1, 5, 'Autobot', 'Alt', 'Blaster vs Soundwave', 'T02', 'Rare' );
    const blasterw3 = Transformer('Blaster', 'Communications', '1none', '2none', 'Mini-Cassette', 0, 14, 2, 10, 'Autobot', 'Alt', 'Blaster vs Soundwave', 'T01', 'Super Rare' );
    //map objects
    const mappedTransformers1 = {
		arceew1: arceew1,
		barragew1: barragew1,
		bombshellw1: bombshellw1,
		bumblebeecomw1: bumblebeecomw1,
		bumblebeeSt: bumblebeeSt,
		bumblebeesurarw1: bumblebeesurarw1,
		chopshopw1: chopshopw1,
		chromiaw1: chromiaw1,
    cliffjumperp1: cliffjumperp1,
    cosmosw1: cosmosw1,
		darkmountw1: darkmountw1,
		deadlockw1: deadlockw1,
		demolisherw1: demolisherw1,
		flamewarw1: flamewarw1,
    grimlockw1: grimlockw1,
    houndw1: houndw1,
    infernow1: infernow1,
    ironhideSt: ironhideSt,
    jazzw1: jazzw1,
		jetfirew1: jetfirew1,
		kickbackw1: kickbackw1,
		megatroncomw1: megatroncomw1,
		megatronrarw1: megatronrarw1,
    metroplexw1a: metroplexw1a,
    miragew1: miragew1,
		nemesisprimew1: nemesisprimew1,
		optimusprimerarw1: optimusprimerarw1,
		optimusprimecomw1: optimusprimecomw1,
		optimusprimeSt: optimusprimeSt,
		prowlw1: prowlw1,
		ramjetw1: ramjetw1,
		ransackw1: ransackw1,
		redalertSt: redalertSt,
    scamperw1a: scamperw1a,
    sergeantkupw1: sergeantkupw1,
    shockwavew1: shockwavew1,
    sixgunw1a: sixgunw1a,
    skrapnelw1: skrapnelw1,
		slammerw1a: slammerw1a,
		skywarpw1: skywarpw1,
    slipstreamp1: slipstreamp1,
		starscreamcomw1: starscreamcomw1,
		starscreamuncw1: starscreamuncw1,
    sunstormw1: sunstormw1,
    swoopw1: swoopw1,
		thundercrackerw1: thundercrackerw1,
		wheeljackw1: wheeljackw1,
    };
    const mappedTransformers2 = {
      acidstormw2: acidstormw2,
      airraidw2: airraidw2,
      alphabravow2: alphabravow2,
      blackwingw2: blackwingw2,
      blitzwingw2: blitzwingw2,
      bluestreakw2: bluestreakw2,
      blurrw2: blurrw2,
      bombshellw2: bombshellw2,
      bonecrusherw2: bonecrusherw2,
      breakdownw2: breakdownw2,
      bumblebeew2: bumblebeew2,
      bumblebeestw2: bumblebeestw2,
      deadendw2: deadendw2,
      dirgew2: dirgew2,
      divebombw2: divebombw2,
      dragstripw2: dragstripw2,
      dreadwindw2: dreadwindw2,
      fireflightw2: fireflightw2,
      grapplew2: grapplew2,
      grimlockw2: grimlockw2,
      headstrongw2: headstrongw2,
      hookw2: hookw2,
      hotrodw2: hotrodw2,
      ironhidew2: ironhidew2,
      longhaulw2: longhaulw2,
      megatronw2: megatronw2,
      megatronstw2: megatronstw2,
      miragew2: miragew2,
      mixmasterw2: mixmasterw2,
      motormasterw2: motormasterw2,
      novastarw2: novastarw2,
      offroadw2: offroadw2,
      omegasupremew2: omegasupremew2,
      optimusprimew2: optimusprimew2,
      prowlw2: prowlw2,
      rampagew2: rampagew2,
      razorclaww2: razorclaww2,
      ruckusw2: ruckusw2,
      scavengerw2: scavengerw2,
      scrapperw2: scrapperw2,
      silverboltw2: silverboltw2,
      skydivew2: skydivew2,
      skywarpw2: skywarpw2,
      sludgew2: sludgew2,
      slugw2: slugw2,
      snarlw2: snarlw2,
      springerw2: springerw2,
      starscreamw2: starscreamw2,
      starscreamstw2: starscreamstw2,
      sunstreakerw2: sunstreakerw2,
      swoopw2: swoopw2,
      thrustw2:thrustw2,
      toroxw2: toroxw2,
      veninw2: veninw2,
      warpathw2: warpathw2,
      windbladew2: windbladew2,
      windbladestw2: windbladestw2,
      superionw2: superionw2,
      predakingw2: predakingw2,
      optimusmaximusw2: optimusmaximusw2,
      menasorw2: menasorw2,
      volcanicusw2: volcanicusw2,
      devastatorw2: devastatorw2,
      dreadwingw2: dreadwingw2
  };

  const mappedTransformers3 = {
    aimlessw3: aimlessw3,
    alphatrionw3: alphatrionw3,
    arceew3: arceew3,
    blasterw3:blasterw3,
    blowpipew3: blowpipew3,
    buzzsaww3:buzzsaww3,
    camshaftw3: camshaftw3,
    chromiaw3: chromiaw3,
    cindersaurw3: cindersaurw3,
    cogw3: cogw3,
    detourw3: detourw3,
    downshiftw3: downshiftw3,
    ejectw3: ejectw3,
    elita1w3: elita1w3,
    firedrivew3: firedrivew3,
    flakw3: flakw3,
    flamefeatherw3: flamefeatherw3,
    flamewarw3: flamewarw3,
    frenzyw3: frenzyw3,
    ionstormw3: ionstormw3,
    ironhidew3: ironhidew3,
    lionizerw3: lionizerw3,
    laserbeakw3: laserbeakw3,
    megatronw3: megatronw3,
    mudslingerw3: mudslingerw3,
    needlenosew3: needlenosew3,
    nightstickw3: nightstickw3,
    optimusprimew3: optimusprimew3,
    overdrivew3: overdrivew3,
    prowlw3: prowlw3,
    pteraxadonw3: pteraxadonw3,
    ramhornw3: ramhornw3,
    ratchetw3: ratchetw3,
    ravagew3: ravagew3,
    ravageRw3: ravageRw3,
    redalertw3: redalertw3,
    redheatw3: redheatw3,
    roadhuggerw3: roadhuggerw3,
    runaboutw3: runaboutw3,
    runamuckw3: runamuckw3,
    shockwavew3: shockwavew3,
    sideswipew3: sideswipew3,
    skrapnelw3: skrapnelw3,
    skywarpw3: skywarpw3,
    smashdownw3: smashdownw3,
    soundwavew3: soundwavew3,
    soundwaveSRw3: soundwaveSRw3,
    sparkstalkerw3: sparkstalkerw3,
    stakeoutw3: stakeoutw3,
    starscreamw3: starscreamw3,
    steeljaww3:steeljaww3,
    stormcloudw3: stormcloudw3,
    topshotw3: topshotw3,
    totew3: totew3,
    trailbreakerw3: trailbreakerw3,
    triggerhappyw3: triggerhappyw3,
    ultramagnusw3: ultramagnusw3,
    visperw3: visperw3,
    wheeljackw3: wheeljackw3
};