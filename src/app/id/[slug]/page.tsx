import { getEmployeeBySlug, EMPLOYEES } from "@/lib/employees";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import EmployeeCard from "@/components/sections/EmployeeCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return EMPLOYEES.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const employee = getEmployeeBySlug(slug);
  if (!employee) return { title: "Funcionário não encontrado" };
  return {
    title: `${employee.nome} — ${employee.cargo} | ZTHA Tecnologia`,
    description: `${employee.nome}, ${employee.cargo} na ZTHA Tecnologia.`,
  };
}

export default async function EmployeePage({ params }: Props) {
  const { slug } = await params;
  const employee = getEmployeeBySlug(slug);
  if (!employee) notFound();

  return <EmployeeCard employee={employee} />;
}