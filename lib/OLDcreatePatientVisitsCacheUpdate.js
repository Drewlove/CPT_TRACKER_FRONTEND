const [createPatientVisits, { loading, error, data }] = useMutation(
  CREATE_PATIENT_VISITS_MUTATION,
  {
    variables: { input: filterPatientVisitsData() },

    //   variables: { input: testData },
    update(proxy, result) {
      try {
        const queryResult = proxy.readQuery({
          query: ALL_PATIENT_VISITS_QUERY,
          variables: {
            skip: 1 * perPage - perPage,
            first: perPage,
          },
        });
        // console.log(`queryResult: ${queryResult}`);
        if (queryResult) updateQuery(proxy);
        const paginationRes = proxy.readQuery({ query: PAGINATION_QUERY });
        // console.log(`paginationRes: ${paginationRes}`);
        const { count } = paginationRes?._allPatientVisitsMeta;
        // console.log(`count: ${count}`);
        const newPaginationData = {
          ...paginationRes,
          count:
            queryResult?.allPatientVisits.length + patientVisitsList.length ||
            count + patientVisitsList.length,
        };
        console.log(queryResult?.allPatientVisits);
        proxy.writeQuery({
          query: PAGINATION_QUERY,
          data: {
            ...paginationRes,
            _allPatientVisitsMeta: newPaginationData,
          },
        });
        // BREAK POINT
        if (!queryResult) return;
        const newPatients = queryResult.allPatientVisits;
        const newPatientsData = newPatients.concat(
          result.data.createPatientVisits
        );
        console.log(newPatientsData, 'newpatientsdata');
        proxy.writeQuery({
          query: ALL_PATIENT_VISITS_QUERY,
          variables: {
            skip: 1 * perPage - perPage,
            first: perPage,
          },
          data: {
            ...queryResult,
            allPatientVisits: [...newPatientsData],
          },
        });
        updateQuery(proxy, newPatientsData.length);
      } catch (error) {
        console.log(error);
      }
    },
  }
);
