const filter = []

const data = {
    current_patch : "12.10.1",
}

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
            }
        },
        
        evenshroud : {
            id : 3001,
            price : 2500,
            stats : {
                hp : 200,
                haste : 20,
                armor : 30,
                mr : 30,
            }
        },
        
        locket_of_the_iron_solari : {
            id : 3190,
            price : 2500,
            stats : {
                hp : 200,
                haste : 20,
                armor : 30,
                mr : 30,
            }
        },
        
        imperial_mandate : {
            id : 4005,
            price : 2500,
            stats : {
                ap : 40,
                hp : 200,
                haste : 20,
                mana_regen : 1,
            }
        },
        
        moonstone_renewer : {
            id : 6617,
            price : 2500,
            stats : {
                ap : 40,
                hp : 200,
                haste : 20,
                mana_regen : 1,
            }
        },
        
        crown_of_the_shattered_queen : {
            id : 4644,
            price : 2800,
            stats :  {
                ap : 60,
                hp : 250,
                mana : 600,
                haste : 20,
            }
        },
        
        everfrost : {
            id : 6656,
            price : 2800,
            stats : {
                ap : 70,
                hp : 250,
                mana : 600,
                haste : 20,
            }
        },
        
        frostfire_gaunlet : {
            id : 6662,
            price : 2800,
            stats : {
                hp : 350,
                armor : 25,
                mr : 25,
                haste : 20,
            }
        },
        
        turbo_chemtank : {
            id : 6664,
            price : 2800,
            stats : {
                hp : 350,
                armor : 25,
                mr : 25,
                haste : 20,
            }
        },
        
        duskblade_of_draktharr : {
            id : 6691,
            price : 3100,
            stats : {
                ad : 60,
                lethality : 18,
                haste : 20,
            }
        },
        
        eclipse : {
            id : 6692,
            price : 3100,
            stats : {
                ad : 55,
                lethality : 18,
                omnivamp : 0.7
            }
        },
        
        prowlers_claw : {
            id : 6693,
            price : 3100,
            stats : {
                ad : 60,
                lethality : 18,
                haste : 20,
            }
        },
        
        sunfire_aegis : {
            id : 3068,
            price : 3200,
            stats : {
                hp : 350,
                armor : 35,
                mr : 35,
                haste : 20,
            }
        },
        
        hextech_rocketbelt : {
            id : 3152,
            price : 3200,
            stats : {
                ap : 90,
                magic_pen : 6,
                hp : 250,
                haste : 15,
            }
        },
        
        riftmaker : {
            id : 4633,
            price : 3200,
            stats : {
                ap : 80,
                hp : 300,
                haste : 15,
                omnivamp : 0.07,
            }
        },
        
        night_harvester : {
            id : 4636,
            price : 3200,
            stats : {
                ap : 90,
                hp : 300,
                haste : 15,
            }
        },
        
        liandrys_anguish : {
            id : 6653,
            price : 3200,
            stats : {
                ap : 80,
                mana : 600,
                haste : 20,
            }
        },
        
        ludens_tempest : {
            id : 6655,
            price : 3200,
            stats : {
                ap : 80,
                magic_pen : 6,
                mana : 600,
                haste : 20,
            }
        },
        
        goredrinker : {
            id : 6630,
            price : 3300,
            stats : {
                ad : 55,
                hp : 300,
                haste : 20,
                omnivamp : 0.08,
            }
        },
        
        stridebreaker : {
            id : 6631,
            price : 3300,
            stats : {
                ad : 50,
                as : 0.2,
                hp : 300,
                haste : 20,
            }
        },
        
        divine_sunderer : {
            id : 6632,
            price : 3300,
            stats : {
                ad : 40,
                hp : 300,
                haste : 20,
            }
        },
        
        trinity_force : {
            id : 3078,
            price : 3333,
            stats : {
                ad : 35,
                as : 0.3,
                hp : 300,
                haste : 20,
            }
        },
        
        galeforce : {
            id : 6671,
            price : 3400,
            stats : {
                ad : 60,
                as : 0.2,
                crit : 0.2,
            }
        },
        
        kraken_slayer : {
            id : 6672,
            price : 3400,
            stats : {
                ad : 65,
                as : 0.25,
                crit : 0.2,
            }
        },
        
        immortal_shieldbow : {
            id : 6673,
            price : 3400,
            stats : {
                ad : 50,
                as : 0.2,
                crit : 0.2,
                life_steal : 0.07,
            }
        },


    }
}