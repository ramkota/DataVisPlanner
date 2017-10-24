/*****************************************************************************/
/*  Methods */
/*****************************************************************************/

Meteor.methods({
    'add_vis': function(id) {
        // Create a visualisation
        // Get the configuration of this DAG
        dag = Dags.findOne(id);
        // Create a visualistion for this DAG
        return DagsVis.insert({
            "name": dag.dag_name,
            "dag_id": id,
            "title": dag.vis_title,
            "text": dag.vis_text,
            "type": dag.vis_type,
            "updatedAt": dag.updatedAt,
            "credits": "doc.credits",
            "data": dag.clean_data
        });
    },
    'change_vis': function(id) {
        // Edit a visualisation
        return DagsVis.upsert({});
    },
    'remove_vis': function(id) {
        // Delete a visualisation
        DagsVis.remove({
            _id: id
        });
    }
});
