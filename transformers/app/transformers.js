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
    const cosmosw1 = Transformer('Autobot Cosmos', 'Recon & Communication', '1none', '2none', 'Specialist', 2, 21, 1, 11, 'Autobot', 'Alt', '1', 'T02', 'Rare');  
    const houndw1 = Transformer('Autobot Hound', 'Long Range Scout', '1none', '2none', 'Melee', 4, 12, 2, 8, 'Autobot', 'Alt', '1', 'T03', 'Common');
    const jazzw1 = Transformer('Autobot Jazz', 'Special Ops', 'Leader', '2none', 'Melee', 3, 10, 0, 6, 'Autobot', 'Alt', '1', 'T04', 'Uncommon');
    const miragew1 = Transformer('Autobot Mirage', 'Lone Wolf', '1none', '2none', 'Ranged', 5, 12, 2, 9, 'Autobot', 'Alt', '1', 'T05', 'Uncommon');      
    const barragew1 = Transformer('Barrage', 'Merciless Insecticon', '1none', 'Insecticon', 'Ranged', 5, 11, 1, 7, 'Insecticon', 'Alt', '1', 'T06', 'Common');
    const bombshellw1 = Transformer('Bombshell', 'Insecticon Mind-Controller', '1none', 'Insecticon', 'Bombshell', 5, 10, 2, 8, 'Insecticon', 'Alt', '1', 'T07', 'Common');    
    const bumblebeecomw1 = Transformer('Bumblebee', 'Courageous Scout', '1none', '2none', 'Specialist', 6, 10, 2, 9, 'Autobot', 'Alt', '1', 'T08', 'Common');  
    const bumblebeeSt = Transformer('Bumblebee', 'Brave Warrior', 'Leader', '2none', 'Melee', 4, 9, 2, 6, 'Autobot', 'Alt', '1', 'ST01', 'Rare');
    const bumblebeesurarw1 = Transformer('Bumblebee', 'Legendary Warrior', 'Leader', '2none', 'Melee', 5, 15, 1, 10, 'Autobot', 'Alt', '1', 'T09', 'Super Rare');
    const chopshopw1 = Transformer('Chop Shop', 'Sneaky Insecticon', '1none', 'Insecticon', 'Melee', 4, 9, 1, 6, 'Insecticon', 'Alt', '1', 'T10', 'Uncommon');  
    const chromiaw1 = Transformer('Chromia', 'Special Ops', 'Leader', '2none', 'Specialist', 4, 11, 0, 8, 'Autobot', 'Alt', '1', 'T11', 'Rare');
    const cliffjumperp1 = Transformer('Cliff Jumper', 'Renegade Warrior', '1none', '2none', 'Ranged', 5, 12, 2, 11, 'Autobot', 'Alt', '1', 'P01', 'Super Rare');
    const darkmountw1 = Transformer('Darkmount', 'Cruel Overlord', '1none', '2none', 'Melee', 5, 9, 3, 9, 'Decepticon', 'Alt', '1', 'T12', 'Rare');
    const deadlockw1 = Transformer('Deadlock', 'Bounty Hunter', '1none', '2none', 'Ranged', 5, 11, 1, 8, 'Decepticon', 'Alt', '1', 'T13', 'Uncommon');        
    const shockwavew1 = Transformer('Decepticon Shockwave', 'Cybertron Commander', 'Leader', '2none', 'Specialist', 4, 11, 3, 11, 'Decepticon', 'Alt', '1', 'T14', 'Rare');
    const demolisherw1 = Transformer('Demolisher', 'Devoted Decepticon', '1none', '2none', 'Melee', 0, 7, 4, 6, 'Decepticon', 'Alt', '1', 'T15', 'Uncommon');    	
    const sludgew1 = Transformer('Dinobot Sludge', 'Mighty Stomper', '1none', 'Dinobot', 'Specialist', 5, 12, 2, 8, 'Dinobot', 'Alt', '1', 'T16', 'Uncommon');  
    const slugw1 = Transformer('Dinobot Slug', 'Hot-Headed Warrior', '1none', 'Dinobot', 'Melee', 6, 13, 0, 9, 'Dinobot', 'Alt', '1', 'T17', 'Common');
    const snarlw1 = Transformer('Dinobot Snarl', 'Desert Warrior', '1none', 'Dinobot', 'Melee', 5, 9, 2, 7, 'Dinobot', 'Alt', '1', 'T18', 'Uncommon');    
    const swoopw1 = Transformer('Dinobot Swoop', 'Fearsome Flyer', '1none', 'Dinobot', 'Specialist', 5, 10, 0, 6, 'Dinobot', 'Alt', '1', 'T19', 'Common');
    const flamewarw1 = Transformer('Flamewar', 'Veteran Decepticon', '1none', '2none', 'Specialist', 3, 10, 1, 5, 'Decepticon', 'Alt', '1', 'T20', 'Common');
    const grimlockw1 = Transformer('Grimlock', 'Dinobot Leader', 'Leader', 'Dinobot', 'Melee', 6, 12, 2, 10, 'Dinobot', 'Alt', '1', 'T21', 'Uncommon');
    const infernow1 = Transformer('Inferno', 'Fearless Firefighter', '1none', '2none', 'Ranged', 8, 11, 3, 12, 'Autobot', 'Alt', '1', 'T22', 'Common');
    const skrapnelw1 = Transformer('Insecticon Skrapnel', 'Insecticon Leader', 'Leader', 'Insecticon', 'Melee', 5, 7, 0, 7, 'Insecticon', 'Alt', '1', 'T23', 'Rare');
    const ironhideSt = Transformer('Ironhide', 'Veteran Autobot', '1none', '2none', 'ranged', 4, 7, 2, 6, 'Autobot', 'Alt', '1', 'ST02', 'Rare');
    const jetfirew1 = Transformer('Jetfire', 'Air Guardian', '1none', '2none', 'Ranged', 4, 15, 1, 10, 'Autobot', 'Alt', '1', 'T24', 'Uncommon');
    const kickbackw1 = Transformer('Kickback', 'Cunning Insecticon', '1none', 'Insecticon', 'Melee', 0, 9, 1, 5, 'Insecticon', 'Alt', '1', 'T25', 'Uncommon');
    const megatroncomw1 = Transformer('Megatron', 'Decepticon Leader', 'Leader', '2none', 'Ranged', 4, 12, 2, 10, 'Decepticon', 'Alt', '1', 'T26', 'Common');
    const megatronrarw1 = Transformer('Megatron', 'Living Weapon', 'Leader', '2none', 'Ranged', 7, 14, 2, 13, 'Decepticon', 'Alt', '1', 'T27', 'Rare');
    const metroplexw1a = Transformer('Metroplex', 'Autobot City', 'Titan', '2none', 'Ranged', 6, 35, 2, 25, 'Autobot', 'Alt', '1', '1AT01', 'Super Rare');
    const nemesisprimew1 = Transformer('Nemesis Prime', 'Dark Clone', '1none', '2none', 'Melee', 7, 16, 2, 12, 'Decepticon', 'Alt', '1', 'T28', 'Super Rare');
    const optimusprimerarw1 = Transformer('Optimus Prime', 'Battlefield Legend', 'Leader', '2none', 'Ranged', 8, 14, 2, 13, 'Autobot', 'Alt', '1', 'T29', 'Rare');
    const optimusprimecomw1 = Transformer('Optimus Prime', 'Freedom Fighter', 'Leader', '2none', 'Melee', 5, 15, 2, 12, 'Autobot', 'Alt', '1', 'T30', 'Rare');
    const optimusprimeSt = Transformer('Optimus Prime', 'Autobot Leader', 'Leader', '2none', 'Ranged', 3, 10, 2, 7, 'Autobot', 'Alt', '1S', 'ST03', 'Rare');
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
    const starscreamcomw1 = Transformer('Starscream', 'Scheming Second-In-Command', 'Leader', '2none', 'Ranged', 5, 14, 1, 10, 'Decepticon', 'Alt', '1', 'T36', 'Common');
    const starscreamuncw1 = Transformer('Starscream', 'Air Commander', 'Leader', '2none', 'Ranged', 4, 13, 2, 11, 'Decepticon', 'Alt', '1', 'T37', 'Uncommon');
    const sunstormw1 = Transformer('Sunstorm', 'Fusion Flyer', '1none', '2none', 'Ranged', 0, 14, 1, 11, 'Decepticon', 'Alt', '1', 'T38', 'Rare');
    const thundercrackerw1 = Transformer('Thundercracker', 'Mach Warrior', '1none', '2none', 'Ranged', 5, 12, 1, 8, 'Decepticon', 'Alt', '1', 'T39', 'Uncommon');
    const wheeljackw1 = Transformer('Wheeljack', 'Weapons Inventor', '1none', '2none', 'Melee', 5, 13, 1, 9, 'Autobot', 'Alt', '1', 'T40', 'Uncommon');

    //Wave 2 Transformers
    const acidstormw2 = Transformer('Acid Storm', 'Toxic Terror', '1none', 'Plane', 'Ranged', 3, 8, 0, 6, 'Decepticon', 'Alt', '2', 'T01', 'Rare' );
    const airraidw2 = Transformer('Air Raid', 'Fearless Flyer', 'Aerialbot', 'Plane', 'Ranged', 3, 8, 0, 5, 'Autobot', 'Alt', '2', 'T02', 'Common' );
    const alphabravow2 = Transformer('Alpha Bravo', 'Airborne Special Ops', '1none', 'Plane', 'Ranged', 2, 8, 1, 5, 'Autobot', 'Alt', '2', 'T03', 'Common' );
    const hotrodw2 = Transformer('Autobot Hot Rod', 'Impulsive Fighter', 'Sentinel', 'Car', 'Ranged', 4, 10, 2, 6, 'Autobot', 'Alt', '2', 'T04', 'Uncommon' );
    const miragew2 = Transformer('Autobot Mirage', 'Counterintelligence', 'Sentinel', 'Car', 'Specialist', 2, 10, 2, 7, 'Autobot', 'Alt', '2', 'T05', 'Uncommon' );
    const novastarw2 = Transformer('Autobot Novastar', 'Search And Rescue', 'Car', 'Truck', 'Melee', 6, 13, 3, 12, 'Autobot', 'Alt', '2', 'T06', 'Common' );
    const springerw2 = Transformer('Autobot Springer', 'Aerial Defense', '1none', 'Truck', 'Ranged', 4, 14, 2, 12, 'Autobot', 'Alt', '2', 'T07', 'Super Rare' );
    const blackwingw2 = Transformer('Blackwing', 'Aerial Attacker', 'Dreadwing', 'Plane', 'Ranged', 5, 12, 1, 8, 'Decepticon', 'Alt', '2', 'T08', 'Common' );
    const blitzwingw2 = Transformer('Blitzwing', 'Relentless Foe', '1none', 'Tank', 'Ranged', 3, 13, 2, 11, 'Decepticon', 'Alt', '2', 'T14', 'Super Rare' );
    const bluestreakw2 = Transformer('Bluestreak', 'Reluctant Soldier', '1none', 'Car', 'Melee', 0, 9, 4, 8, 'Autobot', 'Alt', '2', 'T10', 'Uncommon' );
    const blurrw2 = Transformer('Blurr', 'Fastest Bot In The Galaxy', '1none', 'Car', 'Melee', 3, 10, 2, 12, 'Autobot', 'Alt', '2', 'T11', 'Uncommon' );
    const bombshellw2 = Transformer('Bombshell', 'Decepticon Psy Ops', '1none', 'Insecticon', 'Specialist', 1, 15, 1, 11, 'Decepticon', 'Alt', '2', 'T12', 'Rare' );
    const breakdownw2 = Transformer('Breakdown', 'Paranoid Scout', 'Stunticon', 'Car', 'Specialist', 2, 7, 2, 5, 'Decepticon', 'Alt', '2', 'T13', 'Common' );
    const bumblebeew2 = Transformer('Bumblebee', 'Trusted Lieutenant', 'Leader', 'Car', 'Melee', 5, 14, 1, 10, 'Autobot', 'Alt', '2', 'T14', 'Common' );
    const deadendw2 = Transformer('Dead End', 'Doomed Loner', 'Stunticon', 'Car', 'Ranged', 2, 7, 2, 5, 'Decepticon', 'Alt', '2', 'T15', 'Common' );
    const dragstripw2 = Transformer('Decepticon Drag Strip', 'Cuttthroat Warrior', 'Stunticon', 'Car', 'Melee', 3, 7, 2, 5, 'Decepticon', 'Alt', '2', 'T16', 'Common' );
    const veninw2 = Transformer('Decepticon Venin', 'Insecticon Tyrant', 'Leader', 'Insecticon', 'Ranged', 4, 12, 2, 9, 'Decepticon', 'Alt', '2', 'T17', 'Rare' );
    const sludgew2 = Transformer('Dinobot Sludge', 'Dino Demolitions', '1none', 'Dinobot', 'Melee', 3, 12, 2, 8, 'Autobot', 'Alt', '2', 'T18', 'Rare' );
    const slugw2 = Transformer('Dinobot Slug', 'Battering Ram', '1none', 'Dinobot', 'Melee', 3, 10, 3, 8, 'Autobot', 'Alt', '2', 'T19', 'Rare' );
    const snarlw2 = Transformer('Dinobot Snarl', 'Spiked Battler', '1none', 'Dinobot', 'Melee', 3, 9, 2, 7, 'Autobot', 'Alt', '2', 'T20', 'Rare' );
    const swoopw2 = Transformer('Dinobot Swoop', 'Bombardier', '1none', 'Dinobot', 'Specialist', 3, 11, 1, 7, 'Autobot', 'Alt', '2', 'T21', 'Rare' );
    const dirgew2 = Transformer('Dirge', 'Doombringer', '1none', 'Plane', 'Ranged', 4, 11, 2, 8, 'Decepticon', 'Alt', '2', 'T22', 'Uncommon' );
    const divebombw2 = Transformer('Divebomb', 'Aerial Assault', '1none', 'Predacon', 'Specialist', 2, 7, 2, 5, 'Decepticon', 'Alt', '2', 'T23', 'Uncommon' );
    const dreadwindw2 = Transformer('Dreadwind', 'Air Defense', 'Dreadwing', 'Plane', 'Ranged', 2, 12, 3, 8, 'Decepticon', 'Alt', '2', 'T24', 'Common' );
    const fireflightw2 = Transformer('Fire Flight', 'Sky High Recon', 'Aerialbot', 'Plane', 'Ranged', 1, 7, 2, 5, 'Autobot', 'Alt', '2', 'T25', 'Common' );
    const grapplew2 = Transformer('Grapple', 'Autobot Architect', '1none', 'Truck', 'Melee', 5, 12, 2, 12, 'Autobot', 'Alt', '2', 'T26', 'Uncommon' );
    const grimlockw2 = Transformer('Grimlock', 'Powerful Commander', 'Leader', 'Dinobot', 'Melee', 4, 13, 0, 9, 'Autobot', 'Alt', '2', 'T27', 'Rare' );
    const ironhidew2 = Transformer('Ironhide', 'Steadfast Brawler', 'Sentinel', 'Truck', 'Melee', 4, 10, 2, 7, 'Autobot', 'Alt', '2', 'T28', 'Uncommon' );
    const megatronw2 = Transformer('Megatron', 'Arrogant Ruler', 'Leader', 'Tank', 'Ranged', 3, 14, 3, 10, 'Decepticon', 'Alt', '2', 'T29', 'Common' );
    const motormasterw2 = Transformer('Motormaster', 'Stunticon Leader', 'Leader', 'Stunticon', 'Truck', 2, 8, 2, 5, 'Decepticon', 'Alt', '2', 'T30', 'Common' );
    const offroadw2 = Transformer('Offroad', 'All-Terrain Soldier', 'Stunticon', 'Truck', 'Melee', 2, 6, 3, 5, 'Decepticon', 'Alt', '2', 'T31', 'Common' );
    const optimusprimew2 = Transformer('Optimus Prime', 'Gleaming Commander', 'Leader', 'Sentinel', 'Melee', 4, 15, 2, 11, 'Autobot', 'Alt', '2', 'T32', 'Uncommon' );
    const headstrongw2 = Transformer('Predacon Headstrong', 'Ground Assault', '1none', 'Predacon', 'Melee', 1, 5, 3, 5, 'Decepticon', 'Alt', '2', 'T33', 'Uncommon' );
    const rampagew2 = Transformer('Predacon Rampage', 'Savage Hunter', '1none', 'Predacon', 'Melee', 2, 7, 1, 5, 'Decepticon', 'Alt', '2', 'T34', 'Uncommon' );
    const prowlw2 = Transformer('Prowl', 'Strategic Mastermind', 'Sentinel', 'Car', 'Melee', 5, 10, 1, 7, 'Autobot', 'Alt', '2', 'T35', 'Uncommon' );
    const razorclaww2 = Transformer('Razorclaw', 'Predacon Leader', 'Leader', 'Predacon', 'Melee', 2, 8, 1, 5, 'Decepticon', 'Alt', '2', 'T36', 'Uncommon' );
    const ruckusw2 = Transformer('Ruckus', 'Combat Assault', '1none', 'Car', 'Ranged', 5, 12, 3, 11, 'Decepticon', 'Alt', '2', 'T37', 'Common' );
    const silverboltw2 = Transformer('Silverbolt', 'Aerialbot Leader', 'Aerialbot', 'Plane', 'Ranged', 2, 7, 1, 5, 'Autobot', 'Alt', '2', 'T38', 'Common' );
    const skydivew2 = Transformer('Skydive', 'Air Warfare Specialist', 'Aerialbot', 'Plane', 'Specialist', 3, 8, 2, 5, 'Autobot', 'Alt', '2', 'T39', 'Common' );
    const skywarpw2 = Transformer('Skywarp', 'Teleporting Seeker', '1none', 'Plane', 'Specialist', 4, 13, 1, 10, 'Decepticon', 'Alt', '2', 'T40', 'Rare' );
    const starscreamw2 = Transformer('Starscream', 'Decepticon King', 'Leader', 'Plane', 'Ranged', 5, 15, 2, 13, 'Decepticon', 'Alt', '2', 'T41', 'Super Rare' );
    const sunstreakerw2 = Transformer('Sunstreaker', 'Bold Warrior', 'Sentinel', 'Car', 'Specialist', 4, 10, 1, 7, 'Autobot', 'Alt', '2', 'T42', 'Uncommon' );
    const thrustw2 = Transformer('Thrust', 'Supersonic Interceptor', '1none', 'Plane', 'Ranged', 3, 11, 3, 9, 'Decepticon', 'Alt', '2', 'T43', 'Uncommon' );
    const toroxw2 = Transformer('Torox', 'Fueler', '1none', 'Predacon', 'Melee', 2, 9, 0, 5, 'Decepticon', 'Alt', '2', 'T44', 'Uncommon' );
    const warpathw2 = Transformer('Warpath', 'Confident Sharpshooter', '1none', 'Tank', 'Ranged', 4, 6, 2, 6, 'Autobot', 'Alt', '2', 'T45', 'Rare' );
    const windbladew2 = Transformer('Windblade', 'Combiner Hunter', '1none', 'Plane', 'Specialist', 5, 14, 2, 12, 'Autobot', 'Alt', '2', 'T46', 'Super Rare' );
    const scavengerw2 = Transformer('Scavenger', 'Mining And Salvage', '1none', 'Constructicon', 'Melee', 3, 5, 1, 4, 'Decepticon', 'Alt', '2', 'T05', 'Rare' );
    const scrapperw2 = Transformer('Scrapper', 'Construction Foreman', '1none', 'Constructicon', 'Melee', 3, 7, 1, 5, 'Decepticon', 'Alt', '2', 'T06', 'Rare' );
    const mixmasterw2 = Transformer('Mixmaster', 'Materials Fabrication', '1none', 'Constructicon', 'Melee', 3, 4, 2, 4, 'Decepticon', 'Alt', '2', 'T04', 'Rare' );
    const longhaulw2 = Transformer('Longhaul', 'Transport', '1none', 'Constructicon', 'Melee', 2, 6, 1, 4, 'Decepticon', 'Alt', '2', 'T03', 'Rare' );
    const hookw2 = Transformer('Hook', 'Surgical Engineer', '1none', 'Constructicon', 'Ranged', 2, 7, 0, 4, 'Decepticon', 'Alt', '2', 'T02', 'Rare' );
    const bonecrusherw2 = Transformer('Bonecrusher', 'Demolitions', '1none', 'Constructicon', 'Melee', 3, 4, 1, 4, 'Decepticon', 'Alt', '2', 'T01', 'Rare' );
    const omegasupremew2 = Transformer('Omega Supreme', 'Autobot Defense Base', 'Guardian', 'Spaceship', 'Tank', 4, 24, 2, 19, 'Autobot', 'Alt', '2', 'P2', 'Rare' );
    const windbladeRw2 = Transformer('Windblade (Rare)', 'Defender of Truth', '1none', 'Plane', 'Ranged', 2, 8, 1, 5, 'Autobot', 'Alt', '2', 'T04', 'Rare' );
    const superionw2 = Transformer('Superion', 'Sky Protector', '1none', 'Aerialbot', 'Ranged', 6, 39, 1, 25, 'Autobot', 'null', '2', 'null', 'null' );
    const predakingw2 = Transformer('Predaking', 'Ferocius Hunter', '1none', 'Predacon', 'Melee', 7, 37, 2, 25, 'Decepticon', 'null', '2', 'null', 'null' );
    const optimusmaximusw2 = Transformer('Optimus Maximus', 'Ultimate Defender', 'Leader', 'Sentinel', 'Ranged', 9, 65, 1, 25, 'Autobot', 'null', '2', 'null', 'null' );
    const menasorw2 = Transformer('Menasor', 'Menacing Colossus', '1none', 'Stunticon', 'Melee', 6, 35, 2, 25, 'Decepticon', 'null', '2', 'null', 'null' );
    const volcanicusw2 = Transformer('Volcanicus', 'Fiery Champion', '1none', 'Dinobot', 'Melee', 6, 56, 0, 25, 'Autobot', 'null', '2', 'null', 'null' );
    const devastatorw2 = Transformer('Devastator', 'Towering Warrior', '1none', 'Constructicon', 'Melee', 6, 33, 2, 25, 'Decepticon', 'null', '2', 'null', 'null' );
    const dreadwingw2 = Transformer('Dreadwing', 'Sky Destroyer', 'Dreadwing', 'Plane', 'Ranged', 7, 24, 2, 15, 'Autobot', 'null', '2', 'null', 'null' );

    const mappedTransformers1 = {
		arceew1: arceew1,
		cosmosw1: cosmosw1,
		houndw1: houndw1,
		jazzw1: jazzw1,
		miragew1: miragew1,
		barragew1: barragew1,
		bombshellw1: bombshellw1,
		bumblebeecomw1: bumblebeecomw1,
		bumblebeeSt: bumblebeeSt,
		bumblebeesurarw1: bumblebeesurarw1,
		chopshopw1: chopshopw1,
		chromiaw1: chromiaw1,
		cliffjumperp1: cliffjumperp1,
		darkmountw1: darkmountw1,
		deadlockw1: deadlockw1,
		shockwavew1: shockwavew1,
		demolisherw1: demolisherw1,
		sludgew1: sludgew1,
		slugw1: slugw1,
		snarlw1: snarlw1,
		swoopw1: swoopw1,
		flamewarw1: flamewarw1,
		grimlockw1: grimlockw1,
		infernow1: infernow1,
		skrapnelw1: skrapnelw1,
		ironhideSt: ironhideSt,
		jetfirew1: jetfirew1,
		kickbackw1: kickbackw1,
		megatroncomw1: megatroncomw1,
		megatronrarw1: megatronrarw1,
		metroplexw1a: metroplexw1a,
		nemesisprimew1: nemesisprimew1,
		optimusprimerarw1: optimusprimerarw1,
		optimusprimecomw1: optimusprimecomw1,
		optimusprimeSt: optimusprimeSt,
		prowlw1: prowlw1,
		ramjetw1: ramjetw1,
		ransackw1: ransackw1,
		redalertSt: redalertSt,
		scamperw1a: scamperw1a,
		sixgunw1a: sixgunw1a,
		slammerw1a: slammerw1a,
		sergeantkupw1: sergeantkupw1,
		skywarpw1: skywarpw1,
		slipstreamp1: slipstreamp1,
		starscreamcomw1: starscreamcomw1,
		starscreamuncw1: starscreamuncw1,
		sunstormw1: sunstormw1,
		thundercrackerw1: thundercrackerw1,
		wheeljackw1: wheeljackw1,
    };
    const mappedTransformers2 = {
      acidstormw2: acidstormw2,
      airraidw2: airraidw2,
      alphabravow2: alphabravow2,
      hotrodw2: hotrodw2,
      miragew2: miragew2,
      novastarw2: novastarw2,
      springerw2: springerw2,
      blackwingw2: blackwingw2,
      blitzwingw2: blitzwingw2,
      bluestreakw2: bluestreakw2,
      blurrw2: blurrw2,
      bombshellw2: bombshellw2,
      breakdownw2: breakdownw2,
      bumblebeew2: bumblebeew2,
      deadendw2: deadendw2,
      dragstripw2: dragstripw2,
      veninw2: veninw2,
      sludgew2: sludgew2,
      slugw2: slugw2,
      snarlw2: snarlw2,
      swoopw2: swoopw2,
      dirgew2: dirgew2,
      divebombw2: divebombw2,
      dreadwindw2: dreadwindw2,
      fireflightw2: fireflightw2,
      grapplew2: grapplew2,
      grimlockw2: grimlockw2,
      ironhidew2: ironhidew2,
      megatronw2: megatronw2,
      motormasterw2: motormasterw2,
      offroadw2: offroadw2,
      optimusprimew2: optimusprimew2,
      headstrongw2: headstrongw2,
      rampagew2: rampagew2,
      prowlw2: prowlw2,
      razorclaww2: razorclaww2,
      ruckusw2: ruckusw2,
      silverboltw2: silverboltw2,
      skydivew2: skydivew2,
      skywarpw2: skywarpw2,
      starscreamw2: starscreamw2,
      sunstreakerw2: sunstreakerw2,
      headstrongw2: headstrongw2,
      toroxw2: toroxw2,
      warpathw2: warpathw2,
      windbladew2: windbladew2,
      scavengerw2: scavengerw2,
      scrapperw2: scrapperw2,
      longhaulw2: longhaulw2,
      mixmasterw2: mixmasterw2,
      hookw2: hookw2,
      bonecrusherw2: bonecrusherw2,
      omegasupremew2: omegasupremew2,
      windbladeRw2: windbladeRw2,
      superionw2: superionw2,
      predakingw2: predakingw2,
      optimusmaximusw2: optimusmaximusw2,
      menasorw2: menasorw2,
      volcanicusw2: volcanicusw2,
      devastatorw2: devastatorw2,
      dreadwingw2: dreadwingw2
  };