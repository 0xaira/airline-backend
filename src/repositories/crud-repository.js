class CrudRepository {
    constructor(model) {
      if (!model) {
        throw new Error('Model is required');
      }
      this.model = model;
    }
  
    /**
     * Creates a new record in the database.
     * @param {Object} data - The data to create the record.
     * @returns {Promise<Object>} - The created record.
     * @throws {Error} - Throws an error if creation fails.
     */
    async create(data) {
      try {
        return await this.model.create(data);
      } catch (error) {
        console.error('Error creating record:', error);
        throw new Error('Unable to create record');
      }
    }
  
    /**
     * Retrieves all records from the database.
     * @returns {Promise<Array>} - An array of records.
     * @throws {Error} - Throws an error if retrieval fails.
     */
    async findAll() {
      try {
        return await this.model.findAll();
      } catch (error) {
        console.error('Error retrieving records:', error);
        throw new Error('Unable to retrieve records');
      }
    }
  
    /**
     * Retrieves a record by its ID.
     * @param {number|string} id - The ID of the record.
     * @returns {Promise<Object|null>} - The record, or null if not found.
     * @throws {Error} - Throws an error if retrieval fails.
     */
    async findById(id) {
      try {
        const record = await this.model.findByPk(id);
        if (!record) {
          throw new Error('Record not found');
        }
        return record;
      } catch (error) {
        console.error('Error retrieving record by ID:', error);
        throw new Error('Unable to retrieve record');
      }
    }
  
    /**
     * Updates a record by its ID.
     * @param {number|string} id - The ID of the record.
     * @param {Object} data - The data to update the record with.
     * @returns {Promise<number>} - The number of affected rows.
     * @throws {Error} - Throws an error if update fails.
     */
    async update(id, data) {
      try {
        const [affectedRows] = await this.model.update(data, { where: { id } });
        if (affectedRows === 0) {
          throw new Error('Record not found or no changes made');
        }
        return affectedRows;
      } catch (error) {
        console.error('Error updating record:', error);
        throw new Error('Unable to update record');
      }
    }
  
    /**
     * Deletes a record by its ID.
     * @param {number|string} id - The ID of the record.
     * @returns {Promise<number>} - The number of affected rows.
     * @throws {Error} - Throws an error if deletion fails.
     */
    async delete(id) {
      try {
        const deletedRows = await this.model.destroy({ where: { id } });
        if (deletedRows === 0) {
          throw new Error('Record not found');
        }
        return deletedRows;
      } catch (error) {
        console.error('Error deleting record:', error);
        throw new Error('Unable to delete record');
      }
    }
  }
  
  module.exports = CrudRepository;
  