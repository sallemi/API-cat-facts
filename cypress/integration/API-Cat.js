describe('Tester FACTS', () => {

    it('Tester /facts sans (random , animal_type, amount)', () => {
         cy.request({failOnStatusCode: false , url:'https://cat-fact.herokuapp.com/facts'}).as('touta');
         cy.get('@touta').then(response => {
             expect(response.status).to.eq(200);
             expect(response.body.length).to.eq(5);

             response.body.forEach(function(item){ 
                assert.isObject(item, 'Response is an object')
                expect(item.status).to.exist
                expect(item.status.verified).to.exist
                expect(item.status.sentCount).to.exist
                expect(item._id).to.exist
                expect(item.user).to.exist
                expect(item.text).to.exist
                expect(item.__v).to.exist
                expect(item.source).to.exist
                expect(item.updatedAt).to.exist
                expect(item.type).to.exist
                expect(item.createdAt).to.exist
                expect(item.deleted).to.exist
            });
         });
     })


     it('Tester /facts avec (random)', () => {
        cy.request({failOnStatusCode: false , url:'https://cat-fact.herokuapp.com/facts/random'}).as('touta');
        cy.get('@touta').then(response => {
            expect(response.status).to.eq(200);
            assert.isObject(response.body, 'Response is an object')
            expect(response.body).to.include({"type": "cat"});
            expect(response.body.status).to.exist
            //expect(response.body.status.verified).to.exist
            expect(response.body.status.sentCount).to.exist
            expect(response.body._id).to.exist
            expect(response.body.user).to.exist
            expect(response.body.text).to.exist
            expect(response.body.__v).to.exist
            //expect(response.body.source).to.exist
            expect(response.body.updatedAt).to.exist
            expect(response.body.type).to.exist
            expect(response.body.createdAt).to.exist
            expect(response.body.deleted).to.exist
           
        });
    })




    it('Tester /facts avec (/random , animal_type=cat, amount=3)', () => {
        cy.request({failOnStatusCode: false , url:'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=3'}).as('touta');
        cy.get('@touta').then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.length).to.eq(3);

            response.body.forEach(function(item){ 
               assert.isObject(item, 'Response is an object')
               expect(item.status).to.exist
               //expect(item.status.verified).to.exist
               expect(item.status.sentCount).to.exist
               expect(item._id).to.exist
               expect(item.user).to.exist
               expect(item.text).to.exist
               expect(item.__v).to.exist
               expect(item.updatedAt).to.exist
               expect(item).to.include({"type": "cat"});
               expect(item.createdAt).to.exist
               expect(item.deleted).to.exist
           });
        });
    })


    it('Tester /facts avec (/random , animal_type=dog, amount=3)', () => {
        cy.request({failOnStatusCode: false , url:'https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=3'}).as('touta');
        cy.get('@touta').then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.length).to.eq(3);

            response.body.forEach(function(item){ 
               assert.isObject(item, 'Response is an object')
               expect(item.status).to.exist
               //expect(item.status.verified).to.exist
               expect(item.status.sentCount).to.exist
               expect(item._id).to.exist
               expect(item.user).to.exist
               expect(item.text).to.exist
               expect(item.__v).to.exist
               expect(item.updatedAt).to.exist
               expect(item).to.include({"type": "dog"});
               expect(item.createdAt).to.exist
               expect(item.deleted).to.exist
           });
        });
    })




    it('Tester /facts avec (/random , animal_type=cat, amount=0)', () => {
        cy.request({failOnStatusCode: false , url:'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=0'}).as('touta');
        cy.get('@touta').then(response => {
            expect(response.status).to.eq(400);
            assert.isObject(response.body, 'Response is an object')
            expect(response.body).to.include({"message":"la valeur doit etre superieur a 0"});
        });
    })



    it('Tester /facts avec (/random , animal_type=fat, amount=2)', () => {
        cy.request({failOnStatusCode: false , url:'https://cat-fact.herokuapp.com/facts/random?animal_type=fat&amount=2'}).as('touta');
        cy.get('@touta').then(response => {
            expect(response.status).to.eq(400);
            assert.isObject(response.body, 'Response is an object')
            expect(response.body).to.include({"message":"le type d'animal n'existe pas"});
        });
    })
    })

    describe('Tester FACTS avec factID ', () => {

        it('Tester /facts avec un valeur qui n exste pas factID=0E0E0E0E0E0E0E0E0E0E0E0E', () => {
            cy.request({failOnStatusCode: false , url:'https://cat-fact.herokuapp.com/facts/0E0E0E0E0E0E0E0E0E0E0E0E'}).as('touta');
            cy.get('@touta').then(response => {
                expect(response.status).to.eq(404);
                assert.isObject(response.body, 'Response is an object')
                expect(response.body).to.include({"message": "Fact not found"});
            });
        })


        it('Tester /facts avec (:factID=5887e1d85c873e0011036889)', () => {
            cy.request({failOnStatusCode: false , url:'https://cat-fact.herokuapp.com/facts/5887e1d85c873e0011036889'}).as('touta');
            cy.get('@touta').then(response => {
                    expect(response.status).to.eq(200);
                    assert.isObject(response.body, 'Response is an object')
                    expect(response.body.type).to.exist
                    expect(response.body.status).to.exist
                    //expect(response.body.status.verified).to.exist
                    expect(response.body.status.sentCount).to.exist
                    expect(response.body).to.include({"_id": "5887e1d85c873e0011036889"})
                    expect(response.body.user).to.exist
                    expect(response.body.text).to.exist
                    expect(response.body.__v).to.exist
                    //expect(response.body.source).to.exist
                    expect(response.body.updatedAt).to.exist
                    expect(response.body.type).to.exist
                    expect(response.body.createdAt).to.exist
                    expect(response.body.deleted).to.exist
            });
        })
    
    })