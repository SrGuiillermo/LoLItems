const stats_template = {
    ad : "Attack Damage: ",
    crit : "Critical Strike Chance: ",
    as : "Attack Speed: ",
    armor_pen : "Armor Penetration: ",
    lethality : "Lethality: ",
    ap : "Ability Power: ",
    mana : "Mana: ",
    magic_pen : "Magic Penetration: ",
    hp : "Health: ",
    armor : "Armor: ",
    mr : "Magic Resist: ",
    haste : "Ability Haste: ",
    mana_regen : "Mana Regeneration: ",
    ms : "Move Speed: ",
    omnivamp : "Omnivamp: ",
}

const items = {
    mythic_items : {
        shurelyas_battlesong : {
            id : 2065,
            price : 2500,
            stats : {
                ap : 40,
                hp : 200,
                haste : 20,
                mana_regen : 1,
            },
            tank : true,
            support : true,
        },
        
        evenshroud : {
            id : 3001,
            price : 2500,
            stats : {
                hp : 200,
                haste : 20,
                armor : 30,
                mr : 30,
            },
            support : true,
        },
        
        locket_of_the_iron_solari : {
            id : 3190,
            price : 2500,
            stats : {
                hp : 200,
                haste : 20,
                armor : 30,
                mr : 30,
            },
            tank : true,
            support : true,
        },
        
        imperial_mandate : {
            id : 4005,
            price : 2500,
            stats : {
                ap : 40,
                hp : 200,
                haste : 20,
                mana_regen : 1,
            },
            support : true,
        },
        
        moonstone_renewer : {
            id : 6617,
            price : 2500,
            stats : {
                ap : 40,
                hp : 200,
                haste : 20,
                mana_regen : 1,
            },
            support : true,
        },
        
        crown_of_the_shattered_queen : {
            id : 4644,
            price : 2800,
            stats :  {
                ap : 60,
                hp : 250,
                mana : 600,
                haste : 20,
            },
            mage : true,
        },
        
        everfrost : {
            id : 6656,
            price : 2800,
            stats : {
                ap : 70,
                hp : 250,
                mana : 600,
                haste : 20,
            },
            mage : true,
        },
        
        frostfire_gaunlet : {
            id : 6662,
            price : 2800,
            stats : {
                hp : 350,
                armor : 25,
                mr : 25,
                haste : 20,
            },
            tank : true,
        },
        
        turbo_chemtank : {
            id : 6664,
            price : 2800,
            stats : {
                hp : 350,
                armor : 25,
                mr : 25,
                haste : 20,
            },
            tank : true,
        },
        
        duskblade_of_draktharr : {
            id : 6691,
            price : 3100,
            stats : {
                ad : 60,
                lethality : 18,
                haste : 20,
            },
            assasin : true,
        },
        
        eclipse : {
            id : 6692,
            price : 3100,
            stats : {
                ad : 55,
                lethality : 18,
                omnivamp : 0.7
            },
            assasin : true,
            bruiser : true,
        },
        
        prowlers_claw : {
            id : 6693,
            price : 3100,
            stats : {
                ad : 60,
                lethality : 18,
                haste : 20,
            },
            assasin : true,
        },
        
        sunfire_aegis : {
            id : 3068,
            price : 3200,
            stats : {
                hp : 350,
                armor : 35,
                mr : 35,
                haste : 20,
            },
            tank : true,
        },
        
        hextech_rocketbelt : {
            id : 3152,
            price : 3200,
            stats : {
                ap : 90,
                magic_pen : 6,
                hp : 250,
                haste : 15,
            },
            mage : true,
        },
        
        riftmaker : {
            id : 4633,
            price : 3200,
            stats : {
                ap : 80,
                hp : 300,
                haste : 15,
                omnivamp : 0.07,
            },
            mage : true,
        },
        
        night_harvester : {
            id : 4636,
            price : 3200,
            stats : {
                ap : 90,
                hp : 300,
                haste : 15,
            },
            mage : true,
        },
        
        liandrys_anguish : {
            id : 6653,
            price : 3200,
            stats : {
                ap : 80,
                mana : 600,
                haste : 20,
            },
            mage : true,
        },
        
        ludens_tempest : {
            id : 6655,
            price : 3200,
            stats : {
                ap : 80,
                magic_pen : 6,
                mana : 600,
                haste : 20,
            },
            mage : true
        },
        
        goredrinker : {
            id : 6630,
            price : 3300,
            stats : {
                ad : 55,
                hp : 300,
                haste : 20,
                omnivamp : 0.08,
            },
            bruiser : true,
        },
        
        stridebreaker : {
            id : 6631,
            price : 3300,
            stats : {
                ad : 50,
                as : 0.2,
                hp : 300,
                haste : 20,
            },
            bruiser : true,
        },
        
        divine_sunderer : {
            id : 6632,
            price : 3300,
            stats : {
                ad : 40,
                hp : 300,
                haste : 20,
            },
            bruiser : true,
        },
        
        trinity_force : {
            id : 3078,
            price : 3333,
            stats : {
                ad : 35,
                as : 0.3,
                hp : 300,
                haste : 20,
            },
            bruiser : true,
            marksman : true,
        },
        
        galeforce : {
            id : 6671,
            price : 3400,
            stats : {
                ad : 60,
                as : 0.2,
                crit : 0.2,
            },
            marksman : true,
        },
        
        kraken_slayer : {
            id : 6672,
            price : 3400,
            stats : {
                ad : 65,
                as : 0.25,
                crit : 0.2,
            },
            marksman : true,
        },
        
        immortal_shieldbow : {
            id : 6673,
            price : 3400,
            stats : {
                ad : 50,
                as : 0.2,
                crit : 0.2,
                life_steal : 0.07,
            },
            marksman : true,
        },


    },
}