interface IEmployee {
    first_name: string,
    last_name: string,
    email: string,
    number: string,
    gender: string
}

interface IEmployeeData {
    number: string;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    createdAt: Date;
    photo?: string | undefined;
}

interface ISort {
    [key: string]: -1;
}

interface IFilter {
    $or?: ({ first_name: { $regex: string; $options: string } } | { last_name: { $regex: string; $options: string } })[];
}

export { IEmployee, ISort, IFilter, IEmployeeData }