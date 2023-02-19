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
    })